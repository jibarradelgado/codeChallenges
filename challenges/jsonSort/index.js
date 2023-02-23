let jsonString = JSON.parse('[{"name": "user1", "id": 3}, {"name": "user2", "id": 6}, {"name": "user3", "id": 1}]');
jsonString.sort((a,b) => a.id - b.id)
console.log(jsonString)

