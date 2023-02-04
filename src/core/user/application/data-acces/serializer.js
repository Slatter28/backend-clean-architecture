const _serializeSingle = (user) => {
    return {
        'id': user.id,
        'name': user.name,
        'email': user.email,
        'password': user.password,
        'createdAt': user.created_at,
        'updatedAt': user.updated_at,
    };
  };
  
  const serializer = (data) => {
    if (!data) {
      return null
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingle)
    }
    return _serializeSingle(data)
  }
  
  module.exports = serializer