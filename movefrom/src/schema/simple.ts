export default {
    "type": "object",
    "properties": {
        "fr-5pqi": {
            "title": "数字输入框",
            "type": "number",
            "widget": "inputNumber"
        },
        "fr-duif": {
            "title": "下拉多选",
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
                "placeholder": "请选择"
            }
        },
        "fr-6i34": {
            "title": "点击多选",
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
            "title": "单行文本",
            "type": "string",
            "pattern": "^[A-Za-z0-9]+$",
            "widget": "input"
        },
        "fr-9c3f": {
            "title": "下拉单选",
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
                "placeholder": "请选择"
            },
            "widget": "select"
        },
        "fr-4ok6": {
            "title": "数字输入框",
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
            "title": "滑动条",
            "min": 1,
            "max": 10,
            "maxWidth": "340px",
            "widget": "slider"
        },
        "fr-d8rw": {
            "title": "日期区间选择",
            "type": "range",
            "format": "date",
            "props": {
                "placeholder": [
                    "开始时间",
                    "结束时间"
                ]
            },
            "maxWidth": "340px",
            "widget": "dateRange"
        },
        "fr-dy3l": {
            "title": "日期区间选择",
            "type": "range",
            "format": "date",
            "props": {
                "placeholder": [
                    "开始时间",
                    "结束时间"
                ]
            },
            "widget": "dateRange"
        },
        "fr-6f68": {
            "title": "评分",
            "props": {
                "allowClear": true,
                "count": 19
            },
            "widget": "rate"
        },
        "fr-47yy": {
            "title": "时间区间",
            "type": "range",
            "format": "time",
            "props": {
                "placeholder": [
                    "开始时间",
                    "结束时间"
                ]
            },
            "maxWidth": "340px",
            "widget": "timeRange"
        },
        "fr-gh3o": {
            "title": "下拉多选",
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
                "placeholder": "请选择"
            }
        },
        "fr-fbba": {
            "title": "点击多选",
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
            "title": "日期选择",
            "type": "string",
            "props": {
                "placeholder": "请选择日期"
            },
            "widget": "datePicker"
        },
        "single_text1": {
            "title": "单行文本",
            "type": "string",
            "format": "email",
            "widget": "input"
        }
    },
    "displayType": "row",
    "maxWidth": "340px"
};