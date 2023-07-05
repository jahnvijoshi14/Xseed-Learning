FROM maven:4.0.0-jdk-17 AS build
COPY . .
RUN mvn clean package -Pprod -DskipTests

FROM openjdk:17-jdk-slim

COPY --from=build /target/demo-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar","app-jar"]
