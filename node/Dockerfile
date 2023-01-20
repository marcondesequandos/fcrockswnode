FROM node:15


#copia arquivos locais para a imagem, inclusive node modules,
# por isso não é necessário dar npm init e install express
WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/

RUN npm install

COPY ./ /usr/src/app/

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz
    # && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gzdoc

# COPY . . 

EXPOSE 3000

CMD ["node","index.js"]

