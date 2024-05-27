import {
  buildLogger,
  logger as winstonLogger,
} from "../../src/plugins/logger.plugin";

describe("plugins/logger.plugin.test.ts", () => {
  test("buildLogger should return a function logger", () => {
    const logger = buildLogger("test");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    //! Espiamos el metodo log del objeto logger(wistonlogger)
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "test message";
    const service = "test service";

    //la funcion buildLogger devuelve lo siguiente:
    //* buildLogger(service: string): { 
      //*log: (message: string) => void; 
      //*error: (message: string) => void;
    //*}

    const logger = buildLogger(service);

    logger.log(message);
    //expect(winstonLoggerMock).toHaveBeenCalled()
    //!preguntamos si winstonLogger.log se ejecuto con los siguientes argumentos "info",
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      //! y que tambien se haya ejecutado con el argumento {message,service} y al mismo momento ejecutar la asersion con el metodo objectContaining con los campos minimos necesarios
      expect.objectContaining({
        //!Campos minimos necesarios
        level: "info",
        message,
        service,
      })
    );
  });

  test('testing error log',()=> {
    //! Espiamos el metodo log del objeto logger(wistonlogger)
    const winstonErrorLoggerMock = jest.spyOn(winstonLogger, "error");
    const message = "test error message";
    const service = "test error service";

    //la funcion buildLogger devuelve lo siguiente:
    //* buildLogger(service: string): { 
      //*log: (message: string) => void; 
      //*error: (message: string) => void;
    //*}

    const logger = buildLogger(service);
    logger.error(message);
    //!preguntamos si winstonLogger.log se ejecuto con los siguientes argumentos "error",{"message": "test error message", "service": "test error service"}
    expect(winstonErrorLoggerMock).toHaveBeenCalledWith('error', {"message": "test error message", "service": "test error service"})

  })
});
