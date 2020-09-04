"use strict";

/**
 * Person class.
 */
class Person extends Organism {
    /**
     * Person constructor.
     * @param {string} name Person's name.
     */
    constructor(name) {
        super();

        this.#_name = name;
    }

    /**
     * Person's name
     * @private
     */
    #_name;

    /**
     * Get the name of the person
     * @return {string}
     */
    get name() {
        return this.#_name;
    }

    /**
     * Set the value of the person's name.
     * @param {string} value Desired value of the person's name.
     */
    set name(value) {
        this.#_name = value;
    }

    /**
     * Static function
     */
    static wave() {
        console.log("Somebody waved at you.");
    }

    /**
     * Make the person jump.
     */
    jump() {
        console.log(this.name + " jumped!");
    }
}