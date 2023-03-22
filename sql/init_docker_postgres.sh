docker stop some-postgres
sleep 3
docker run --rm --network some-network --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
sleep 10
docker exec -it some-postgres psql -U postgres postgres -c 'CREATE DATABASE "heroesdb";'
#docker exec -it some-postgres psql -U postgres