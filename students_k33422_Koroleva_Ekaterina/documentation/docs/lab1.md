site_name: "Лабораторные работы"

Задача 1
Описание
Эта задача представляет собой клиент-серверное взаимодействие с использованием протокола UDP. Клиент отправляет серверу приветственное сообщение, сервер его принимает и отвечает.

Код
Клиент (client.py)
python
Copy code
from socket import *

message = "Hello, server!"
encoded_message = str.encode(message)

HOST = ('localhost', 10000)
client = socket(AF_INET, SOCK_DGRAM)

client.sendto(encoded_message, HOST)
server_message = client.recvfrom(1024)
message_info = server_message[0].decode()
print(message_info)
Сервер (server.py)
python
Copy code
from socket import *

# Настраиваем хост
host = 'localhost'
port = 10000
host_data = (host, port)

udp_socket = socket(AF_INET, SOCK_DGRAM)
udp_socket.bind(host_data)

conn, addr = udp_socket.recvfrom(1024)
print(conn.decode())
udp_socket.sendto(b"Hello, client!", addr)


Задача 2
Описание
Эта задача также представляет собой клиент-серверное взаимодействие, но с использованием протокола TCP. Клиент отправляет серверу сообщение с запросом на решение задачи по теореме Пифагора, сервер отвечает, решая задачу.

Код
Клиент (client.py)
python
Copy code
from socket import *
from math import sqrt

message = "Hello, server!"
encoded_message = str.encode(message)

HOST = (gethostname(), 10000)
client = socket(AF_INET, SOCK_STREAM)
client.connect(HOST)
server_message = client.recv(1024).decode()

print(server_message)
user_input = int(input())

if user_input == 1:
    print("Введите значения катетов через запятую")
else:
    print("Введите значения гипотенузы и катета через запятую")

input_data = input()
print(str(user_input) + input_data)
client.sendall((str(user_input) + input_data).encode())

answer = client.recv(1024).decode()
print(answer)
Сервер (server.py)
python
Copy code
from socket import *
from math import sqrt

def find_hip(data: [int]):
    a = data[0]
    b = data[1]
    c = sqrt(a**2 + b**2)
    return c

def find_cat(data: [int]):
    c = data[0]
    a = data[1]
    b = sqrt(c**2 - a**2)
    return b

hello_message = "Вас приветствует сервер для решения теоремы пифагора.\n " \
                "Пожалуйста, при помощи цифры выберете, что вы хотите найти:\n" \
                "1) Гипотенузу \n" \
                "2) Катет".encode()

# Настраиваем хост
host = gethostname()
port = 10000
host_data = (host, port)

server_socket = socket(AF_INET, SOCK_STREAM)
server_socket.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)
server_socket.bind(host_data)
server_socket.listen()

conn, addr = server_socket.accept()
conn.sendall(hello_message)

request = conn.recv(1024).decode()

# Обработать запрос и все посчитать
operation_type = int(request[0])
request = request[1:]
data = list(map(int, request.split(",")))

result = ""
if operation_type == 1:
    answer = find_hip(data)
    result = "Значение гипотенузы равно " + str(answer)
else:
    answer = find_cat(data)
    result = "Значение катета равно " + str(answer)

conn.sendall(result.encode())
conn.close()


Задача 3
HTML-файл
Файл: task3.html
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>
Этот HTML-файл представляет собой базовую структуру веб-страницы с пустым телом.

Сервер
Файл: server.py
python
Copy code
from socket import *

# Настраиваем хост
host = gethostname()
port = 10000
host_data = (host, port)

server_socket = socket(AF_INET, SOCK_STREAM)
server_socket.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)
server_socket.bind(host_data)
server_socket.listen()

conn, addr = server_socket.accept()
request = conn.recv(4096)

file = open("index.html", "r")
file_data = file.read()

header = b"HTTP/1.1 200\r\nserver: localhost\r\ncontent-type: text/html\r\ncharset=UTF-8\r\n\r\n"
body = file_data.encode()
response = header + body
conn.sendall(response)
conn.close()
Этот сервер настроен на прослушивание порта 10000 и отправляет содержимое файла "index.html" в ответ на запрос.

Клиент
Файл: client.py
python
Copy code
from socket import *

HOST = (gethostname(), 10000)
client = socket(AF_INET, SOCK_STREAM)

client.connect(HOST)
request = b"GET / HTTP/1.1\r\nHost: localhost\r\nAccept: text/html\r\nConnection: close\r\n\r\n"
client.sendall(request)
file_data = client.recv(4096)
print(file_data.decode())
Этот клиент подключается к серверу, отправляет GET-запрос и выводит полученные данные.

Документация по Простому Чат-Приложению
Данная документация предоставляет описание исходного кода для создания простого чат-приложения на основе сокетов и многопоточности. Приложение состоит из двух частей: клиента и сервера.

Структура проекта
Проект разделен на два файла: client.py и server.py. Каждый из этих файлов содержит код для соответствующей части приложения.

client.py
client.py представляет собой клиентскую часть чат-приложения. Клиент подключается к серверу и отправляет ему сообщения. Также клиент принимает сообщения от других клиентов через многопоточный механизм.

Пример использования:

python
Copy code
python client.py
При запуске, клиент будет запрашивать ваше имя, а затем ожидать ввода сообщений. Введите 'q' для завершения работы.

server.py
server.py отвечает за серверную часть чат-приложения. Сервер принимает подключения от клиентов и ретранслирует полученные сообщения всем остальным клиентам. Ретрансляция происходит при помощи многопоточности.

Пример использования:

python
Copy code
python server.py
Сервер будет слушать входящие соединения на адресе 0.0.0.0:5002.

Важные моменты
Разделитель токенов: Используется разделитель токенов (<SEP>) для отделения имени пользователя от текста сообщения. Это позволяет четко различать отправителя и сообщение внутри сетевого пакета.

Многопоточность: Обе части приложения используют многопоточность для параллельной обработки входящих и исходящих сообщений.

Завершение работы
Чтобы завершить выполнение приложения, введите 'q' при запросе ввода сообщения на стороне клиента.

Примечание: Это простое чат-приложение создано исключительно в учебных целях и может требовать дополнительной работы для использования в более продвинутых сценариях.


Документация к MyHTTPServer
MyHTTPServer - это простой HTTP-сервер, написанный на языке Python с использованием библиотеки socket. Этот сервер предоставляет минимальный веб-интерфейс для взаимодействия с данными об оценках по дисциплинам.

Инициализация
python
Copy code
server = MyHTTPServer(host, port)
Создает экземпляр MyHTTPServer с указанным хостом (host) и портом (port). После создания сервер ожидает подключения клиентов.

Методы
serve_forever()
python
Copy code
server.serve_forever()
Ожидает постоянно подключения клиентов. Как только клиент подключается, вызывается метод serve_client() для обслуживания запроса.

serve_client(client)
python
Copy code
server.serve_client(client)
Обрабатывает запрос от клиента. Передает данные клиента на обработку методу parse_request().

parse_request(client, data)
python
Copy code
server.parse_request(client, data)
Разбирает запрос от клиента на составляющие, такие как метод, URL и параметры. Затем вызывает метод handle_request() для обработки запроса.

handle_request(client, method, params)
python
Copy code
server.handle_request(client, method, params)
Обрабатывает запрос в зависимости от метода (GET или POST). Если метод GET, возвращает HTML-страницу с текущими оценками. Если метод POST, сохраняет новую оценку и возвращает сообщение об успешном сохранении.

send_response(client, code, reason, body)
python
Copy code
server.send_response(client, code, reason, body)
Отправляет клиенту HTTP-ответ с указанными кодом (code), статусом (reason) и телом (body).

grades_to_html()
python
Copy code
server.grades_to_html()
Генерирует HTML-страницу с текущими оценками. Используется для формирования ответа при запросе метода GET.

Пример использования
python
Copy code
if __name__ == "__main__":
    host = "127.0.0.1"
    port = 8000
    server = MyHTTPServer(host, port)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.conn.close()
Создается экземпляр MyHTTPServer и ожидается подключение клиентов. Сервер работает бесконечно до получения сигнала прерывания (Ctrl+C), после чего закрывает соединение.

Примечание: Этот сервер предназначен только для учебных и демонстрационных целей и не предоставляет надежное обслуживание HTTP-запросов.