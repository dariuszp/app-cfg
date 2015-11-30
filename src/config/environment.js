'use strict';

class Environment {

    constructor(name, directory) {
        this.name = String(name).trim();
        if (name.length === 0) {
            throw new Error('Environment name is required');
        }

        this.directory = String(directory).trim().replace(/[|&;$%@"<>()+,]/g, "");
        if (this.directory.length === 0) {
            this.directory = this.name.replace(/[|&;$%@"<>()+,]/g, "");
        }
        if (this.directory.length === 0) {
            throw new Error(`Invalid environment directory name ${this.directory}`);
        }
    }

}