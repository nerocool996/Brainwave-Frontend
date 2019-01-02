import { StockListModule } from './stock-list.module';

describe('StocksModule', () => {
  let stocksModule: StockListModule;

  beforeEach(() => {
    stocksModule = new StockListModule();
  });

  it('should create an instance', () => {
    expect(stocksModule).toBeTruthy();
  });
});
