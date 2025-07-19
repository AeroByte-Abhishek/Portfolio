package in.abhishekMishra.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HomeController {

    @GetMapping({ "/", "/home" })
    public String showHomePage(Model model) {
        // ✅ Move the tag list creation to Java code
        List<String> expenseTrackerTags = List.of("Spring Boot", "MySQL", "REST API", "React Native", "Docker", "Kafka", "Kubernetes");
        model.addAttribute("expenseTrackerTags", expenseTrackerTags);

        List<String> portfolioTags = List.of("Java", "Spring Boot", "Thymeleaf", "HTML", "CSS", "Java Script", "Maven", "Docker");
        model.addAttribute("portfolioTags", portfolioTags);

        List<String> blogTags = List.of("Java", "Spring Boot", "Thymeleaf", "HTML", "CSS");
        model.addAttribute("blogTags", blogTags);

        List<String> ticketBookingTags = List.of("Java", "Maven", "Mapping", "Hash Password", "BCrypt");
        model.addAttribute("ticketBookingTags", ticketBookingTags);
        
        return "home"; // This renders home.html which includes project fragment

    }
}
