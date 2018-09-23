module.exports = {
    'GET /sitecore/api/ssc/auditlog/log/-/getentries': function (req, res) {
      res.json({"data":[
            {
            "Time": "16:22:58",
            "User": "(sitecore\\admin)",
            "Action": "Login"
            },
            {
            "Time": "08:40:23",
            "User": "(sitecore\\admin)",
            "Action": "Login"
            },
            {
            "Time": "09:21:04",
            "User": "(sitecore\\admin)",
            "Action": "Logout"
            },
            {
            "Time": "09:22:26",
            "User": "(sitecore\\admin)",
            "Action": "Login"
            },
            {
            "Time": "09:24:44",
            "User": "(sitecore\\admin)",
            "Action": "Duplicate item: core:/sitecore/client/Applications/Launchpad/PageSettings/Buttons/Tools/Data Import, language: en, version: 1, id: {94E53E27-1480-4EA9-8AF1-1716D4632B9F}"
            },
            {
            "Time": "09:25:23",
            "User": "(sitecore\\admin)",
            "Action": "Save item: core:/sitecore/client/Applications/Launchpad/PageSettings/Buttons/Tools/Audit Log, language: en, version: 1, id: {8D56FF80-4CC0-4B17-8089-BCB05608A9AB}"
            }],
            "messages":[]
        }
        
    );
}
};
