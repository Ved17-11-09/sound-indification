function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true}) ;
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json'
    ,modelReady) ;
}

function modelReady() {
    Classifier.classifier(gotResults) ;
}