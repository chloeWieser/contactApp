
import './App.css';

function App() {
  return (
    <>
      <div class="container-fluid col-6 offset-3 py-5">

      <div class="row">
          <div class="col">
              <h1 class="text-center">Contact List</h1>
          </div>

      </div>


      <div>
          <div class="row">
              <div class="paper mx-auto my-5 fontStyle">
                  <form class="col-12">
                      <div class="input-group" height="auto" width="100%">

                          <div class="col-12">
                            <input name="contactInput" class="form-control form-control-lg"
                            placeholder="search contacts" id="contactInput"
                            type="text"></input>
                          </div>

                          <div class="row mt-2">
                            <div class="col-12">

                              <button class="btn btn-info h-50" type="button"
                                  id="addNew" name="addNew">Add New Contact</button>
                                  
                              <button class="btn btn-warning h-50 m-4" type="button"
                                  id="showFaves" name="showFaves">Show Favorites</button>
                            </div>

                          </div>
                      </div>
                  </form>

              </div>
          </div>
      </div>


      <div class="row">
          <div class="col">
              <div class="flatPaper mx-auto mb-5 fontStyle">
                  Previously entered contacts
                  <ul>
                      
                  </ul>
              </div>
          </div>
      </div>
      </div>

    </>
  );
}

export default App;
