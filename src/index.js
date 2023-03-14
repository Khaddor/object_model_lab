export const version = () => '1.0.0';

/* TODO : Créer le modèle objet ici */


class Data {
    constructor(){}
}

class TimeSeries extends Data {
    constructor(values, labels){
        super()
        this.values = values;
        this.labels = labels;
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

class Sensor {

    constructor(id, name, data){
        this.id = id;
        this.name = name;
        if(data.values != null){
            data = new TimeSeries(data.values, data.labels);
        }else{ data = new Datum(data.value)}
    }

    setId(id){this.id = id;}
    setName(name){this.name = name;}

    getId(){return this.id}
    getName(){return this.name}
}

class TEMPERATURE extends Sensor{constructor(id, name, data){super(id, name, data)}}
class HUMIDITY extends Sensor{constructor(id, name, data){super(id, name, data)}}
class LIGHT extends Sensor{constructor(id, name, data){super(id, name, data)}}
class SWITCH extends Sensor{constructor(id, name, data){super(id, name, data)}}
class DOOR extends Sensor{constructor(id, name, data){super(id, name, data)}}



