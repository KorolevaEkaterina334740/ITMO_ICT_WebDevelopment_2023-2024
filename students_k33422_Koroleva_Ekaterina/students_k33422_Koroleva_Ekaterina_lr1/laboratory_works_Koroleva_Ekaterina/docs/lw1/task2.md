# Задание №2

???+ question "Задание"

    Реализовать клиентскую и серверную часть приложения. Клиент запрашивает у
    сервера выполнение математической операции, параметры, которые вводятся с
    клавиатуры. Сервер обрабатывает полученные данные и возвращает результат
    клиенту. Вариант - Поиск площади трапеции.

    Обязательно использовать библиотеку `socket`  
    Реализовать с помощью протокола TCP

=== "Сервер"

    ```Python title="server.py"
    --8<-- "laboratory_work_1/2/server.py"
    ```

    В соответствии с моим вариантом мне нужно реализовать 
    серверную услугу нахождения стороны прямоугольного треугольника 
    при помощи теоремы Пифагора. 

    Сначала я объявила две вспомогательные функции: find_hip и find_cat.
    Это функции для вычисления гипотенузы и катета соответственно. 
    Также я сохранила строковую константу в переменную hello_message.
    После стандартной процедуры создания серверного TCP-сокета, 
    я ожидаю входящих подключений. При фиксации подключения, я отправляю клиенту приветственное 
    сообщение. В качестве ответ на приветственное сообщение, клиент выбирает, 
    какую сторону треугольника он желает вычислить. Также в рамках ответа
    пользователь присылает необходимые для вычисления входные данные. 
    В зависимости от сделанного пользователем выбора, запускается нужная процедура 
    и клиенту отправляется результат вычислений. 

=== "Клиент"

    ```Python title="client.py"
    --8<-- "laboratory_work_1/2/client.py"
    ```
