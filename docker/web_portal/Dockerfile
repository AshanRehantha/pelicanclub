# syntax=docker/dockerfile:1

FROM node:14.17.0

LABEL version="1.0"
LABEL description="This is the base docker image for web portal"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

# RUN npm install --development

COPY . .

EXPOSE 8090
EXPOSE 3000
EXPOSE 3033

CMD ["npm", "run", "start:dev"]