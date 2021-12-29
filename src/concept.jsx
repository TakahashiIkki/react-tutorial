import React from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          name="filterText"
          placeholder="search..."
          value={this.props.filterText}
          onChange={(e) => this.props.handleFilterTextChange(e.target.value)}
        />
        <p>
          <label>
            <input
              type="checkbox"
              name="isStockOnly"
              checked={this.props.isStockOnly}
              onChange={(e) =>
                this.props.handleIsStockOnlyChange(e.target.checked)
              }
            />
            Only show products in stock
          </label>
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      isStockOnly: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleIsStockOnlyChange = this.handleIsStockOnlyChange.bind(this);
  }

  handleFilterTextChange(value) {
    this.setState({ filterText: value });
  }

  handleIsStockOnlyChange(value) {
    this.setState({ isStockOnly: value });
  }

  render() {
    const filteredProducts = this.props.products
      .filter((product) => {
        const filterText = this.state.filterText;
        if (!filterText) {
          return true;
        }
        return product.name.indexOf(filterText) !== -1;
      })
      .filter((product) => {
        const isStockOnly = this.state.isStockOnly;
        if (!isStockOnly) {
          return true;
        }
        return product.stocked;
      });

    return (
      <>
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          handleFilterTextChange={this.handleFilterTextChange}
          handleIsStockOnlyChange={this.handleIsStockOnlyChange}
        />
        <ProductTable products={filteredProducts} />
      </>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.name;
    const viewName = product.stocked ? (
      name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{viewName}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const categorySet = [
      ...new Set(this.props.products.map((product) => product.category)),
    ];

    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {categorySet.map((category) => {
            return (
              <React.Fragment key={category}>
                <ProductCategoryRow category={category} />
                {this.props.products
                  .filter((product) => product.category === category)
                  .map((product) => {
                    return <ProductRow key={product.name} product={product} />;
                  })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const response = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
];

export class Concept extends React.Component {
  render() {
    return <FilterableProductTable products={response} />;
  }
}
