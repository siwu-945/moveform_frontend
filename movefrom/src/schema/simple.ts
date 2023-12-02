export default {
    "type": "object",
    "properties": {
        "fr-5pqi": {
            "title": "Number Input",
            "type": "number",
            "widget": "inputNumber"
        },
        "fr-duif": {
            "title": "Dropdown Multi-select",
            "type": "array",
            "widget": "multiSelect",
            "props": {
                "options": [
                    {
                        "label": "A",
                        "value": "A"
                    },
                    {
                        "label": "B",
                        "value": "B"
                    }
                ],
                "placeholder": "Select"
            }
        },
        "fr-6i34": {
            "title": "Multi-select",
            "type": "array",
            "props": {
                "options": [
                    {
                        "label": "A",
                        "value": "A"
                    },
                    {
                        "label": "B",
                        "value": "B"
                    },
                    {
                        "label": "C",
                        "value": "C"
                    }
                ],
                "direction": "row"
            },
            "widget": "checkboxes"
        },
        "fr-8xjs": {
            "title": "Single-line Text",
            "type": "string",
            "pattern": "^[A-Za-z0-9]+$",
            "widget": "input"
        },
        "fr-9c3f": {
            "title": "Dropdown Menu",
            "type": "string",
            "props": {
                "options": [
                    {
                        "label": "A",
                        "value": "1"
                    },
                    {
                        "label": "B",
                        "value": "2"
                    },
                    {
                        "label": "C",
                        "value": "3"
                    }
                ],
                "placeholder": "Select"
            },
            "widget": "select"
        },
        "fr-4ok6": {
            "title": "Number Input",
            "type": "number",
            "props": {
                "prefix": "x",
                "addonBefore": "y",
                "addonAfter": "z",
                "precision": 2
            },
            "widget": "inputNumber"
        },
        "fr-b3ub": {
            "title": "Html",
            "default": "<h1>Hello</h1>",
            "widget": "html"
        },
        "fr-1z7o": {
            "title": "Slider",
            "min": 1,
            "max": 10,
            "maxWidth": "340px",
            "widget": "slider"
        },
        "fr-d8rw": {
            "title": "Date Range",
            "type": "range",
            "format": "date",
            "props": {
                "placeholder": [
                    "Begin",
                    "End"
                ]
            },
            "maxWidth": "340px",
            "widget": "dateRange"
        },
        "fr-dy3l": {
            "title": "Date Range",
            "type": "range",
            "format": "date",
            "props": {
                "placeholder": [
                    "Begin",
                    "End"
                ]
            },
            "widget": "dateRange"
        },
        "fr-6f68": {
            "title": "Rating",
            "props": {
                "allowClear": true,
                "count": 19
            },
            "widget": "rate"
        },
        "fr-47yy": {
            "title": "Time Range",
            "type": "range",
            "format": "time",
            "props": {
                "placeholder": [
                    "Begin",
                    "End"
                ]
            },
            "maxWidth": "340px",
            "widget": "timeRange"
        },
        "fr-gh3o": {
            "title": "Dropdown Multi-select",
            "type": "array",
            "widget": "multiSelect",
            "props": {
                "options": [
                    {
                        "label": "A",
                        "value": "A"
                    },
                    {
                        "label": "B",
                        "value": "B"
                    }
                ],
                "placeholder": "Select"
            }
        },
        "fr-fbba": {
            "title": "Multi-select",
            "type": "array",
            "props": {
                "options": [
                    {
                        "label": "A",
                        "value": "1"
                    },
                    {
                        "label": "B",
                        "value": "2"
                    },
                    {
                        "label": "C",
                        "value": "3"
                    }
                ],
                "direction": "row"
            },
            "maxWidth": "340px",
            "widget": "checkboxes"
        },
        "fr-hhzp": {
            "title": "Date Selection",
            "type": "string",
            "props": {
                "placeholder": "Select"
            },
            "widget": "datePicker"
        },
        "single_text1": {
            "title": "Single-line Text",
            "type": "string",
            "format": "email",
            "widget": "input"
        }
    },
    "displayType": "row",
    "maxWidth": "340px"
};