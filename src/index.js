export const version = () => '1.0.0';

/* TODO : Créer le modèle objet ici */


class Data {
    constructor(){}
}

class TimeSeries extends Data {
    constructor(){
        super()
        this.values = []
        this.labels = []
    }

    setValue(value){this.values.push(value)}
    setLabel(label){this.labels.push(label)}

    getValues(){return this.values;}
    getLabels(){return this.labels;}
}

class Datum extends Data {
    constructor(value){
        super();
        this.value = value;
    }

    setValue(value){this.value = value;}
    getValue(){return this.value;}

}