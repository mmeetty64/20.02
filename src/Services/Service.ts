import Web3 from "web3";
import ABI from "./ABI.json"

class Service {
    web3 = new Web3("http://localhost:8545");
    contract = new this.web3.eth.Contract(ABI as any, "0x3f5661f6d311B0065DAb5d0404AF088a361fA1ef")
    async Auth(login: string, password: string, address: string) {
        try {
            return await this.contract.methods.auth(login, password).call({ from: address })
        } catch (error) {
            console.log(error)
        }
    }
    async Reg(address: string, login: string, password: string) {
        try {
            return await this.contract.methods.register(login, password).send({ from: address })
        } catch (error) {
            console.log(error)
        }
    }
    async ReqWhiteList(name: string, address: string) {
        try {
            return await this.contract.methods.reqWhiteList(name).send({ from: address })
        } catch (error) {
            console.log(error)
        }
    }
    async viewReqWL(address: string) {
        try {
            return await this.contract.methods.viewReqWL().call({ from: address })
        } catch (error) {
            console.log(error)
        }
    }
    async applyReqWL(id: number, answer: boolean, address: string) {
        try {
            return await this.contract.methods.applyReqWL(id, answer).send({ from: address })
        } catch (error) {
            console.log(error)
        }
    }

}
export default new Service()