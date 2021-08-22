FROM 	cypress/base:12

COPY . .

RUN npm install
RUN npm run build:and:test