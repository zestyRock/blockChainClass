const SHA256 = require('crypto-js/sha256')


class Block{
	constructor(timestamp, lastHash, hash, data) {
		this.timestamp = timestamp;
		this.lastHash = lastHash;
		this.hash = hash;
		this.data = data;
	}

	toString(){
		return `Block -
			Timestamp: ${this.timestamp}
			Last Hash: ${this.lastHash.substring(0,10)}
			Hash: 	   ${this.hash.substring(0,10)}
			Data:      ${this.data}
		`
	}

	static genesis(){
		return new this('genesis time', '-------', 'f1r57-h34h', []);
	}

	static mineBlock(lastBlock, data) {
		const timestamp = Date.now();
		const lastHash = lastBlock.hash;
		const hash = Block.hash(timestamp, lastHash, data);

		return new Block(timestamp, lastHash, hash, data);
	}

	static hash(timestamp, lastHash, data){
		return SHA256(`${this.timestamp}${this.lastHash}${this.data}`).toString();
	}

	static blockHash(block) {
		//destructing syntax
		//retrieve each value from block and assign them individually
		const { timestamp, lastHash, data } = block;
		return Block.hash(timestamp, lastHash, data);
	}
}

module.exports = Block;

