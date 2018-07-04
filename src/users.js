var faker = require('faker')

const generateUsers = () => {
  var users = []

  for (var id = 0; id < 10; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.firstName()
    var phoneNumber = faker.phone.phoneNumberFormat()

    users.push({
      "id": id,
      "firstName": firstName,
      "lastName": lastName,
      "phone": phoneNumber
    })
  }

  return users;
}

module.exports = generateUsers;