package com.example;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.Arrays.asList;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

@RestController
@RequestMapping("api")
class Controller {

    @GetMapping("cards")
    public List<CardItem> cardItems() {
        return asList(
                new CardItem(1L, "title1", "text1"),
                new CardItem(2L, "title2", "text2"),
                new CardItem(3L, "title3", "text3"),
                new CardItem(4L, "title4", "text4"),
                new CardItem(5L, "title5", "text5"),
                new CardItem(6L, "title6", "text6")
        );
    }
}

@Data
class CardItem {
    private final Long id;
    private final String title;
    private final String text;
}
