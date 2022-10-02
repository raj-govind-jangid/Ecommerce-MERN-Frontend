FROM node
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3111
CMD npm start