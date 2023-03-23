docker stop some-postgres
sleep 3

# docker run --rm --network some-network --name some-postgres -p 5433:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

#adding a directory as a volume
docker run --rm --network some-network \
    --name some-postgres -p 5433:5432 \
    -e POSTGRES_PASSWORD=mysecretpassword \
    -v my-vol:/var/lib/postgresql/data \
     -d postgres

sleep 20
docker exec -it some-postgres psql -U postgres postgres -c 'CREATE DATABASE "heroesdb";'


#docker exec -it some-postgres psql -U postgres
#adding a directory as a volume
#  docker run --rm --network some-network \
#     --name volume-postgres -p 5434:5432 \
#     -e POSTGRES_PASSWORD=mysecretpassword \
#     -v $(pwd)/postgres/data:/var/lib/postgresql/data \
#      -d postgres