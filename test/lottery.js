const Lottery = artifacts.require("Lottery");

contract("Lottery Contract", accounts => {
    it('Allows accounts to enter', async () => {
        const instance = await Lottery.deployed()
        await instance.enter.call({
            from: accounts[0],
            value: web3.utils.toWei('0.0011', 'ether')
        });

        const players = await instance.getPlayers.call({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(1, players.length);
    });
});