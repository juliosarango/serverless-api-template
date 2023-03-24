const create = async(event, context) => {
  return {
    "statusCode": 201,
    "body": JSON.stringify({"message": "Created"})
  }
}

const read = async(event, context) => {
  return {
    "statusCode": 200,
    "body": JSON.stringify({"message": "Read"})
  }
}

const update = async(event, context) => {
  return {
    "statusCode": 200,
    "body": JSON.stringify({"message": "Updated"})
  }
}

const deleted = async(event, context) => {
  return {
    "statusCode": 200,
    "body": JSON.stringify({"message": "Deleted"})
  }
}

module.exports = {
  create,
  read,
  deleted,
  update
}