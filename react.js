module.exports = {
    "extends": [
        "airbnb",
        "nfen/lib/defaults"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "react/jsx-indent-props": [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-uses-vars": 1,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": 1,
        "react/sort-comp": [
            1,
            {
                "order": [
                    "type-annotations",
                    "static-methods",
                    "constructor",
                    "state",
                    "instance-variables",
                    "lifecycle",
                    "getters",
                    "setters",
                    "instance-methods",
                    "everything-else",
                    "render"
                ]
            }
        ],
        "react/require-default-props": [
            0,
            "never"
        ]
    }
}