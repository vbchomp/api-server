'use strict'

/** Collection interface, this provides an abstraction for behaviors we expect an API data would want to peform, regardless of dialect
**/

class Collection {
    constructor(model) {
        this.model = model;
    }
    async create(json) {
        try {
            let record = await this.model.create(json);

            return record;
        } catch (e) {
            console.error('Error creating data for model : ' + this.model.name);
            return e;
        }
    }

// checking for an id. if id then get 1, if no id, then get all.
    async read(id) {
        let record = null;
        if (id) {
            options['where'] = { id };
            records = await this.model.findOne(options);
        } else {
            records = await this.model.findAll(options);
        }
        return record;
    } catch (e) {
        console.error('Error reading data for model : ' + this.model.name);
        return e;
    }

// 
    async update(id, json) {
        try {
            // throw new Error like next()
            if (!id) throw new Error(`No record id provided for model: ${this.model.name} `);
            let record = await this.model.findOne({ where: { id } });
            let updatedRecord = await record.update(json);
            return updatedRecord;
        } catch (e) {
            console.error(`Error updating mode : ${this.model.name}`);
            return e;
        }

    }

    async delete(id) {
        try {
            if (!id) throw new Error(`No record id provided for model: ${this.model.name} `);

            let deletedRecord = await this.model.delete({ where: { id } });
            return deletedRecord;  
        } catch (e) {
            console.error(`Error deleting data for model : ${this.model.name}`);
        }
    }
}

module.export = Collection;