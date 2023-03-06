const app = require("../../app");

const request = require("supertest");

const { Task } = require("./../../models");

beforeAll(() => {
  jest.resetAllMocks();
});

// Définir un test unitaire pour la méthode findAll du modèle Task
describe("Task CRUD test", () => {
  it("should work", async () => {
    // Créer un mock de la méthode findAll
    const mockFindAll = jest.fn().mockResolvedValue([
      { id: 1, name: "Mocked Model 1" },
      { id: 2, name: "Mocked Model 2" },
    ]);

    // Appliquer le mock à la méthode findAll du modèle Task
    Task.findAll = mockFindAll;

    const res = await request(app).get("/tasks");

    expect(mockFindAll).toHaveBeenCalled();

    expect(res.body[0]).toHaveProperty("id");

    // Vérifier que la méthode findAll a été appelée avec les bons arguments
    expect(mockFindAll.mock.calls).toHaveLength(1);
    expect(mockFindAll.mock.calls[0][0]).toEqual({});
  });
});
