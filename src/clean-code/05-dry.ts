type Size = '' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) {}

  isProductReady(): boolean {
        
        for( const key in this ) {
            switch( typeof this[key] ) {
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0 ) throw Error(`${ key } is empty`);
                break;
                case 'number':
                    if ( (<number><unknown>this[key]) <= 0 ) throw Error(`${ key } is zero`);
                break;
                default:
                    throw Error(`${ typeof this[key] } is not valid`);
            }
        }

        return true;
    }

  toString() {
    // No DRY
    // if(this.name.length <= 0) throw Error('Name is required');
    // if(this.price <= 0) throw Error('Price is required');
    // if(this.size.length <= 0) throw Error('Size is required');

     if ( !this.isProductReady ) return;
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
    const bluePants = new Product('Blue large pants', 10, 'L');
    console.log( bluePants.toString() );
})();