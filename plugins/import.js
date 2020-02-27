module.exports = {
    "extends": [
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "rules": {
        "import/no-unresolved": [
            2,
            {
                "commonjs": true,
                "amd": true
            }
        ],
        "import/extensions": [
            0,
            "never"
        ],
        "import/no-extraneous-dependencies": [
            0,
            "never"
        ],
    }
}