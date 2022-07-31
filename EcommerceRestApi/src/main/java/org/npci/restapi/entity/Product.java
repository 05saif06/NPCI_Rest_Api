package org.npci.restapi.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Product")
public class Product {

	@Id
	@Column(name="id")
	private long prodId;
	
	@Column(name="sku")
	private String sku;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	@Column(name="unit_price")
	private float unitPrice;
	
	@Column(name="image_url")
	private String imageURL;
	
	@Column(name="units_in_stock")
	private int unitsInStock;
	
	@Column(name="date_created")
	private Date dateCreated;
	
	@Column(name="last_updated")
	private Date lastUpdated;
	
	@Column(name="category_id")
	private long categoryId;

	public Product() {
		
	}

	public Product(long prodId, String sku, String name, String description, float unitPrice, String imageURL,
			int unitsInStock, Date dateCreated, Date lastUpdated, long categoryId) {
		super();
		this.prodId = prodId;
		this.sku = sku;
		this.name = name;
		this.description = description;
		this.unitPrice = unitPrice;
		this.imageURL = imageURL;
		this.unitsInStock = unitsInStock;
		this.dateCreated = dateCreated;
		this.lastUpdated = lastUpdated;
		this.categoryId = categoryId;
	}

	public long getProdId() {
		return prodId;
	}

	public void setProdId(long prodId) {
		this.prodId = prodId;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(float unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public int getUnitsInStock() {
		return unitsInStock;
	}

	public void setUnitsInStock(int unitsInStock) {
		this.unitsInStock = unitsInStock;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public Date getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

	public long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(long categoryId) {
		this.categoryId = categoryId;
	}

	@Override
	public String toString() {
		return "Product [prodId=" + prodId + ", sku=" + sku + ", name=" + name + ", description=" + description
				+ ", unitPrice=" + unitPrice + ", imageURL=" + imageURL + ", unitsInStock=" + unitsInStock
				+ ", dateCreated=" + dateCreated + ", lastUpdated=" + lastUpdated + ", categoryId=" + categoryId + "]\n";
	}
	
	
}

