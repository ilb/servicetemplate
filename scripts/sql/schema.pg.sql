DROP DATABASE IF EXISTS servicetemplate;
create database servicetemplate;
CREATE USER servicetemplate WITH PASSWORD 'servicetemplate';
GRANT ALL PRIVILEGES ON DATABASE servicetemplate to servicetemplate;
ALTER USER servicetemplate CREATEDB;
