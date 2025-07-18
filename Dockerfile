FROM eclipse-temurin:21-jdk as build

WORKDIR /app
COPY . .

# ✅ Fix permission issue
RUN chmod +x mvnw

# Build your project
RUN ./mvnw clean package -DskipTests

# Run the built app
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
