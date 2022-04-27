FROM openjdk:17

ENV ENVIRONMENT=prod

ADD backend/target/todoapp.jar todoapp.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /todoapp.jar" ]