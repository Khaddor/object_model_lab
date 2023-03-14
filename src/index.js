export const version = () => '1.0.0';

/* TODO : Créer le modèle objet ici */


export class Data {
    constructor(){}
}

export class TimeSeries extends Data {
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

export class Datum extends Data {
    constructor(value){
        super();
        this.value = value;
    }

    setValue(value){this.value = value;}
    getValue(){return this.value;}

}

export class Sensor {

    constructor(id, name, data){
        this.id = id;
        this.name = name;
        if(data.values != null){
            this.data = new TimeSeries(data.values, data.labels);
        }else{ this.data = new Datum(data.value)}
    }

    setId(id){this.id = id;}
    setName(name){this.name = name;}

    getId(){return this.id}
    getName(){return this.name}
}

export class TEMPERATURE extends Sensor{constructor(id, name, data){super(id, name, data)}}
export class HUMIDITY extends Sensor{constructor(id, name, data){super(id, name, data)}}
export class LIGHT extends Sensor{constructor(id, name, data){super(id, name, data)}}
export class SWITCH extends Sensor{constructor(id, name, data){super(id, name, data)}}
export class DOOR extends Sensor{constructor(id, name, data){super(id, name, data)}}



