package com.contractdemo.contractdemo;

import io.restassured.module.mockmvc.RestAssuredMockMvc;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ContractdemoApplication.class)
public abstract class ContractVerifierBase {

    @Before
    public void setUp() {
        RestAssuredMockMvc.standaloneSetup(new NoodleController());
    }
}