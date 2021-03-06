package com.contractdemo.contractdemo

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins=["*"])
@RestController
class NoodleController {

    @GetMapping("/api/noodles")
    fun getNoodles(): List<Noodle> {
        return listOf(
                Noodle(
                        noodle = "wheat",
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