FROM node:8.9

RUN npm i -g yarn
RUN yarn global add pm2

EXPOSE 8000
EXPOSE 8001

WORKDIR /debug-test

COPY . /debug-test/

RUN yarn

CMD ["pm2-docker", "processFile.yml"]
