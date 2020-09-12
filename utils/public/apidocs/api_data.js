define({ "api": [
  {
    "type": "POST",
    "url": "/api/resource/User",
    "title": "Create User",
    "name": "Create_User",
    "group": "Miscellaneous",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "token &lt;&lt;token&gt;&gt;",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Mobile headers",
          "content": "{\"Authorization\":\"token token\",\"Accept\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Users/neel/qct/frappe-bench/config/apidocs/apidoc.py",
    "groupTitle": "Miscellaneous"
  },
  {
    "type": "GET",
    "url": "/api/resource/User",
    "title": "Get User List",
    "name": "Get_User_List",
    "group": "Miscellaneous",
    "version": "0.0.0",
    "filename": "/Users/neel/qct/frappe-bench/config/apidocs/apidoc.py",
    "groupTitle": "Miscellaneous"
  }
] });
