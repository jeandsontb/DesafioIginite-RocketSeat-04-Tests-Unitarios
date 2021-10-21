import { InMemoryUsersRepository } from "../../../users/repositories/in-memory/InMemoryUsersRepository";
import { IUsersRepository } from "../../../users/repositories/IUsersRepository"
import { InMemoryStatementsRepository } from "../../repositories/in-memory/InMemoryStatementsRepository";
import { IStatementsRepository } from "../../repositories/IStatementsRepository";
import { GetBalanceUseCase } from "./GetBalanceUseCase";


let usersRepository: IUsersRepository;
let getStatementRepository: IStatementsRepository;
let getBalanceUseCase: GetBalanceUseCase;


describe("Get Balances", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    getStatementRepository = new InMemoryStatementsRepository();
    getBalanceUseCase = new GetBalanceUseCase(
      getStatementRepository,
      usersRepository,
    );
  });

  it("hould be able to get a balance")

})
