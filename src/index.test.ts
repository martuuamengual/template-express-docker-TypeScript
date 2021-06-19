import request from 'supertest'
import server from './index';


describe("Nodejs", () => {

    test("server runs at port 8080", async () => {
        const response = await request(server).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('text/html');
    });

});