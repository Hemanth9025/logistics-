 package com.example.logistics.model;

// import jakarta.persistence.*;
// // import jakarta.validation.constraints.Max;
// // import jakarta.validation.constraints.Min;
// import java.time.LocalDate;

// @Entity
// public class OrderManagement {

//     @Id
//     // @Min(1000)
//     // @Max(9999)
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

    
//     private String productName;
//     private String dimension;
//     private String mainService;
//     private String innerService;
//     private double amount;
//     private String name;
//     private String address;
    
//     @Column(name = "date")
//     private LocalDate date;  // To store the current date
//     private String status;
//     // Default constructor
//     public OrderManagement() {
//         this.date = LocalDate.now();  // Set the current date
//     }

//     // Parameterized constructor
//     public OrderManagement(String productName, String dimension, String mainService, String innerService, double amount, String name, String status ,String address) {
//         this.productName = productName;
//         this.dimension = dimension;
//         this.mainService = mainService;
//         this.innerService = innerService;
//         this.amount = amount;
//         this.name = name;
//         this.date = LocalDate.now();  // Set the current date
//         this.status=status;
//         this.address=address;
//     }

//     // Getters and Setters
//     public Long getId() { return id; }
//     public void setId(Long id) { this.id = id; }

//     public String getProductName() { return productName; }
//     public void setProductName(String productName) { this.productName = productName; }

//     public String getDimension() { return dimension; }
//     public void setDimension(String dimension) { this.dimension = dimension; }

//     public String getMainService() { return mainService; }
//     public void setMainService(String mainService) { this.mainService = mainService; }

//     public String getInnerService() { return innerService; }
//     public void setInnerService(String innerService) { this.innerService = innerService; }

//     public double getAmount() { return amount; }
//     public void setAmount(double amount) { this.amount = amount; }

//     public String getName() { return name; }
//     public void setName(String name) { this.name = name; }

//     public LocalDate getDate() { return date; }
//     public void setDate(LocalDate date) { this.date = date; }

//     public String getStatus() { return status; }
//     public void setStatus(String status) { this.status = status; }

//     public String getaddress() {return address;}
//     public void setaddress(String address) {this.address=address;}
// }package com.example.ordermanagement.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "order_management")
public class OrderManagement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "dimension")
    private String dimension;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "main_service")
    private String mainService;

    @Column(name = "inner_service")
    private String innerService;

    @Column(name = "amount")
    private double amount;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "status")
    private String status;

    @Column(name = "shipment_address")
    private String shipmentAddress;

    @Column(name = "card_name")
    private String cardName;

    public OrderManagement() {
        this.date = LocalDate.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDimension() {
        return dimension;
    }

    public void setDimension(String dimension) {
        this.dimension = dimension;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getMainService() {
        return mainService;
    }

    public void setMainService(String mainService) {
        this.mainService = mainService;
    }

    public String getInnerService() {
        return innerService;
    }

    public void setInnerService(String innerService) {
        this.innerService = innerService;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getShipmentAddress() {
        return shipmentAddress;
    }

    public void setShipmentAddress(String shipmentAddress) {
        this.shipmentAddress = shipmentAddress;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    // Getters and setters
}
