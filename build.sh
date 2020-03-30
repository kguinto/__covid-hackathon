docker-compose down

# Build UI
# (cd react-app; ./build.sh)
# Build API
# (cd flask-app; ./build.sh)
# Build All Docker Images
docker-compose build

# Run Flask App and Postgres
docker-compose up -d 

# Create tables and insert dummy data
psql -h 127.0.0.1 -p 5003 help_directory -U postgres -f createdb.sql
psql -h 127.0.0.1 -p 5003 help_directory -U postgres -f insert_dummy_data.sql
