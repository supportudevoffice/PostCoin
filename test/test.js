const BigNumber = web3.BigNumber;
const PostCoin = artifacts.require('./PostCoin.sol');
require('chai').use(require('chai-as-promised')).use(require('chai-bignumber')(BigNumber)).should();

contract('PostCoin', (
    [
        owner,
        otherGuy,
        minter
    ]) => {

        var mPostCoin = null;

        beforeEach('init contracts', async () => {
            mPostCoin = await PostCoin.new(minter, {from: owner});
            assert.notEqual(mPostCoin, null, "coin not deployed");
        });

        describe('minter tests:', async () => {

            it('should test that minter can mint', async () => {
                const mintAmount = new BigNumber(100e18);
                const minter = await mPostCoin.minter();
                await mPostCoin.mint(otherGuy, mintAmount, {from: minter});
                (await mPostCoin.balanceOf(otherGuy)).should.be.bignumber.equal(mintAmount);
            });

            it ('should test that mint event is fired', async () => {
                const mintAmount = new BigNumber(100e18);
                await mPostCoin.mint(otherGuy, mintAmount, {from: minter});
                var watchMint = await mPostCoin.Mint();
                const eventsMint = await Promisify(cb => watchMint.get(cb));
                eventsMint.length.should.be.bignumber.equal(1);
            });
            
        });

        const Promisify = (inner) =>
            new Promise((resolve, reject) =>
                inner((err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
            })
        );

    }
);
