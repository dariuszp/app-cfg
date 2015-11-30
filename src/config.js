'use strict';

class Configuration {

    constructor(directory) {
        this.directory = String(directory).trim().replace(/[|&;$%@"<>()+,]/g, "");
        if (this.directory.length === 0) {
            this.directory = this.name.replace(/[|&;$%@"<>()+,]/g, "");
        }

        this.config = {};
        this.environments = [];
    }

}

module.exports = Configuration;