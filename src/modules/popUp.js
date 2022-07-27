const addPopUpToMoviesDiv = () => {
  const popUpPart = document.getElementById('popUp');
  popUpPart.innerHTML = `
  <div class="modal fade modal-dialog-scrollable" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-center" id="staticBackdropLabel">Information</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4 d-flex flex-column align-items-center">
          <p id="popUpId" class="align-self-start"></p>
          <div class="row">
            <div class="col-6" id="popUpPoster"></div>
            <div class="col-6 pt-5">
              <h2 class="card-name" id="popUpTitle"></h2>
              <p class="card-des" id="popUpDescription"></p>
            </div>
          </div>
          <div id="userDetailDiv">
            <a class="btn mt-3 mb-3" data-toggle="collapse" href="#popUpMovieComments" role="button" aria-expanded="false"
              aria-controls="popUpMovieComments" id="movieDetailCounter">
            </a>
            <!--no need-->
            <div class="collapse d-flex flex-column align-self-start w-100 p-3 comments-div" id="popUpMovieDetail">
            <!---->
            </div>
          </div>
        </div>
        <form id="popUpForm" class="p-4">
          <div class="form-group">
            <input type="text" class="comment-input" placeholder="Type Your Name" id="user-name">
          </div>
          <div class="form-group d-none" id="userCommentDiv">
            <textarea class="comment-input" id="user-comment"placeholder="Type Your Comment "></textarea>
          </div>
          <div class="form-group d-none" id="reservationStartDateDiv">
            <textarea class="comment-input" id="reservationStartDate"placeholder="Date start"></textarea>
          </div>
          <div class="form-group d-none" id="reservationEndDateDiv">
            <textarea class="comment-input" id="reservationEndDate" placeholder="Date end"></textarea>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn">Comment</button>
          </div>
        </form>
      </div>
    </div>
  </div>`;
};

export { addPopUpToMoviesDiv }; // eslint-disable-line import/prefer-default-export
