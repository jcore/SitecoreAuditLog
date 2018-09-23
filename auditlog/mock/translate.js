module.exports = {
  'GET /sitecore/api/ssc/sci/translate/1AECEF5C-54BC-48F7-9FE0-7BF7F7E02DEF/gettranslations': function (req, res) {
    res.json([
      { Phrase: 'Audit Log', Key: 'APP_NAME' },
      { Phrase: 'Log Entries', Key: 'DASHBOARD_PAGE' }
    ]);
  },
  'GET /sitecore/api/ssc/sci/translate/2218B78E-5A07-462F-A9D6-15E086742612/gettranslations': function (req, res) {
    res.json([
      { Phrase: 'Back', Key: 'BACK' },
      { Phrase: 'Log out', Key: 'LOG_OUT' }
    ]);
  }
};
