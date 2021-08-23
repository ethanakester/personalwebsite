# The format for this is from  this article https://www.indellient.com/blog/how-to-dockerize-an-angular-application-with-nginx/

# PART 1
FROM node:latest as build

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app

COPY . .

RUN npm install
RUN npm run build


# PART 2
FROM nginx:latest

COPY --from=build /usr/local/app/dist/website /usr/share/nginx/html
COPY ./website.conf /etc/nginx/conf.d
COPY ./nginx.conf /etc/nginx/nginx.conf