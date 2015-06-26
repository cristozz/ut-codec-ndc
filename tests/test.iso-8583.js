var iso8583 = require('../iso8583.js');

// (function(){
//     var buff = new Buffer('303230303732334134343131323841303930303031363633363136303530303030303731323033303130303030303030303030303030303031303231303631303139343734303333303631303139313032313130323136303131303231443030303030303030313136323732303030303030303239363336313630353030303030373132303D32323031313031303030303037363537202020202020202056414E41544D3035434F4D505554455220574F524C44202020202020202020504F52542056494C41202020202020565535343845454534423232364343364636423044', 'hex');
//     var Iso8583 = new iso8583();
//     console.log(Iso8583.decode(buff));
// })();

(function(){
    //var buff = new Buffer('30333138' + '49534F373031303030303031323030' + 'FEF76D01A8E0F8000000000000000001' + '3136363034383337303130313038363737333331323030303030303030303030303030303030303030303030303030303030303030303030303030303135303631373135353430303030303030313030303030303031303038313934313530363137313535343031313430343135303631373036313736303131323838323838353131323031323133333434323831303633303033313330363330303331333331363034383337303130313038363737333D313430343530313032343630303130303030303030303831393443464341544D303120202020202020203330303331332020202020202020203035416363726139333639333639333634343432333130443135384533313636313030323031303030303030FFFFFFFFFFFFFFFF', 'hex');
    var buff = new Buffer('3033373249534F373031303030303031313130FEF76D01AAE0FC0000000000000000013136353839323336313235353837363033353030303030303030303030303030303235303030303030303030303235303030303030303030303235303135303631393134333030303030303030313030303030303031383439363533313530363139313534363031313630323135303632303036313935343131323838323838353130313031323133313443323030303633303033313530363330303331353234353839323336313235353837363033353D313630323130303531373031393834393635333030303831353030303032202020202020202038313530303030323030303120202034304E45585420444F4F522020202020202020202020202020203E4143435241202020202020202047483933363933363933363045333645364246323034364241303731303031303130303030303030323030303032303030433030303030303038383634363338363543363039', 'hex');

    var buff = new Buffer('3031303049534F3730313030303030313830348232018088000000000000000000000131353036323231343039303030303030313530363232313430393035313530363232383031303030303036333030333439303030303030303030303030FFFFFFFFFFFFFFFF', 'hex');

    var buff = new Buffer('3033323549534F373031303030303031323130FE776D01AAE0E8000000000000000001313635383932333631323535383736303335333032303030303030303030303030303030303030303030303030303030303030303030303030303030313530363236313430393030303030303031383835363037313530363236313631303030313630323135303632373036323636303131323838323838353131323031303139303431323030303633303033313630363330303331363234353839323336313235353837363033353D3136303231303035313737313434343730333031313131303137303031312020202020202020464142472020202020202020202020343046414247202020202020202020202020202020202020414343524120202020202020204E554C47483933363933363933363130303230313030303030304531304631463839', 'hex');

    var Iso8583 = new iso8583({
        'fieldsDefinition':'tests/testData/iso8583.fields_gipss.json'
    });
    console.log(Iso8583.decode(buff));
})();
