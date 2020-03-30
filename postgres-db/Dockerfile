FROM postgres:latest
ENV POSTGRES_DB help_directory
COPY help_directory_dump.sql /docker-entrypoint-initdb.d/
