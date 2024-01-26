site_name: My Docs

# Конфигурация Django для проекта lab3.

# Блок настроек путей внутри проекта.
BASE_DIR: Путь_к_папке_проекта

# Настройки безопасности.
SECRET_KEY: 'django-insecure-Ваш_секретный_ключ'
DEBUG: True
ALLOWED_HOSTS: []

# Блок настроек приложений.
INSTALLED_APPS:
  - 'django.contrib.admin'
  - 'django.contrib.auth'
  - 'django.contrib.contenttypes'
  - 'django.contrib.sessions'
  - 'django.contrib.messages'
  - 'django.contrib.staticfiles'
  - 'drf_yasg'
  - 'djoser'
  - 'rest_framework'
  - 'school'

# Блок настроек промежуточного программного обеспечения.
MIDDLEWARE:
  - 'django.middleware.security.SecurityMiddleware'
  - 'django.contrib.sessions.middleware.SessionMiddleware'
  - 'django.middleware.common.CommonMiddleware'
  - 'django.middleware.csrf.CsrfViewMiddleware'
  - 'django.contrib.auth.middleware.AuthenticationMiddleware'
  - 'django.contrib.messages.middleware.MessageMiddleware'
  - 'django.middleware.clickjacking.XFrameOptionsMiddleware'

# Настройки URL-маршрутизации и отображения.
ROOT_URLCONF: 'lab3.urls'
TEMPLATES:
  DIRS:
    - Путь_к_папке_шаблонов
  APP_DIRS: True

WSGI_APPLICATION: 'lab3.wsgi.application'

# Настройки базы данных.
DATABASES:
  default:
    ENGINE: 'django.db.backends.sqlite3'
    NAME: Путь_к_файлу_sqlite3

# Настройки пароля.
AUTH_PASSWORD_VALIDATORS:
  - NAME: 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'
  - NAME: 'django.contrib.auth.password_validation.MinimumLengthValidator'
  - NAME: 'django.contrib.auth.password_validation.CommonPasswordValidator'
  - NAME: 'django.contrib.auth.password_validation.NumericPasswordValidator'

# Международные настройки.
LANGUAGE_CODE: 'en-us'
TIME_ZONE: 'UTC'
USE_I18N: True
USE_TZ: True

# Настройки статических файлов.
STATIC_URL: 'static/'

# Тип поля по умолчанию для первичных ключей.
DEFAULT_AUTO_FIELD: 'django.db.models.BigAutoField'

# Настройка модели пользователя.
AUTH_USER_MODEL: 'school.User'

# Настройки REST Framework.
REST_FRAMEWORK:
  DEFAULT_RENDERER_CLASSES:
    - 'rest_framework.renderers.JSONRenderer'
    - 'rest_framework.renderers.BrowsableAPIRenderer'
  DEFAULT_AUTHENTICATION_CLASSES:
    - 'rest_framework_simplejwt.authentication.JWTAuthentication'

# Настройки JWT для Django.
SIMPLE_JWT:
  ACCESS_TOKEN_LIFETIME: 60  # Время жизни токена доступа в минутах.
  REFRESH_TOKEN_LIFETIME: 1440  # Время жизни токена обновления в минутах.
  ROTATE_REFRESH_TOKENS: False
  BLACKLIST_AFTER_ROTATION: True
  ALGORITHM: 'HS256'
  SIGNING_KEY: 'django-insecure-Ваш_секретный_ключ'
  VERIFYING_KEY: null
  AUTH_HEADER_TYPES: ('Bearer',)
  USER_ID_FIELD: 'id'
  USER_ID_CLAIM: 'user_id'
  AUTH_TOKEN_CLASSES: ('rest_framework_simplejwt.tokens.AccessToken',)

# Настройки Djoser.
DJOSER:
  LOGIN_FIELD: 'username'
  USER_CREATE_PASSWORD_RETYPE: True
  SEND_ACTIVATION_EMAIL: False
  SEND_CONFIRMATION_EMAIL: False
  PASSWORD_RESET_CONFIRM_URL: 'password/reset/confirm/{uid}/{token}'
  USERNAME_RESET_CONFIRM_URL: 'email/reset/confirm/{uid}/{token}'
  ACTIVATION_URL: 'activate/{uid}/{token}'
  SERIALIZERS:
    user_create: 'school.serializers.UserCreateSerializer'
    user: 'school.serializers.UserSerializer'
    current_user: 'school.serializers.UserSerializer'
    user_delete: 'djoser.serializers.UserDeleteSerializer'
