let photoList = ["Photo1", "Photo2", "Photo3"];

var currentPhotoIndex = 0;

function displayPhotoList() {
    var file = photoList[currentPhotoIndex];
}
currentPhotoIndex++;
if(currentPhotoIndex >= photoList.length) {
    currentPhotoIndex = 0;
}
displayPhotoList();

function slideshow() {
    currentPhotoIndex++;
    if(currentPhotoIndex >= photoList.length) {
        currentPhotoIndex = 0;
        console.log(currentPhotoIndex);
    }

    displayPhotoList();
}
