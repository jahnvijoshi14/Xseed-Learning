FROM eclipse-temurin: 17-idk-alpine
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ("java", "-jar", "/app.jar"]
EXPOSE 8080
