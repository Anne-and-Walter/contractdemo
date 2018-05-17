package com.contractdemo.contractdemo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class NoodleController {

    @GetMapping("/api/noodles")
    fun getNoodles(): List<Noodle> {
        return listOf(
                Noodle(
                        noodle = "wheasdfat",
                        rating = 10
                ),
                Noodle(
                        noodle = "rice",
                        rating = 11
                ),
                Noodle(
                        noodle = "zucchini",
                        rating = 9
                )
        )
    }
}

data class Noodle(
        val noodle: String,
        val rating: Int
)