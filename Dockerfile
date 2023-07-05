FROM ubuntu:latest As build
RUN apt-get update
RUN apt-get install openjdk-17-jdk -y
COPY . .
RUN ./gradlew boatJar --no-daemon

FROM openjdk:17-jdk-slim
EXPOSE 8080
COPY --from=build /build/libs/demo-1.jar app.jar

ENTRYPOINT ["java", "-jar","app-jar"]
