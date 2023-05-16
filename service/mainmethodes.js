

exports.getMethodes = Model =>{
  return {
    getAll: () => Model.find(),
    
    getById: id => Model.findById(id),

    create : recode => Model.create(recode),

    update: (id ,record) => Model.findByIdAndUpdate(id ,record),

    delete :(id) => Model.findByIdAndDelete(id)


  }
} 