var clone = require('clone');
module.exports = {
    'post /store/admin/login/check': function(req, res) {
        res.json({message: "", result: true, code: 200});
    },
    'get /project': function(req, res) {
        setTimeout(function(){
            res.json(
                {"status":true,"data":{"0":{"user_type_code":"akc","brand_user_type_label":"A K C"},"1":{"user_type_code":"bounty","brand_user_type_label":"bounty"},"2":{"user_type_code":"converse","brand_user_type_label":"THIS is a converse brand"},"3":{"user_type_code":"failte","brand_user_type_label":"failte"},"4":{"user_type_code":"friso","brand_user_type_label":"friso"},"5":{"user_type_code":"friso_cn","brand_user_type_label":"friso_cn"},"6":{"user_type_code":"friso_hk","brand_user_type_label":"friso_hk"},"7":{"user_type_code":"friso_id","brand_user_type_label":"friso_id"},"8":{"user_type_code":"friso_my","brand_user_type_label":"friso_my"},"9":{"user_type_code":"friso_ph","brand_user_type_label":"friso_ph"},"10":{"user_type_code":"friso_sg","brand_user_type_label":"friso_sg"},"11":{"user_type_code":"friso_sg_test","brand_user_type_label":"friso_sg_test"},"12":{"user_type_code":"friso_vn","brand_user_type_label":"friso_vn"},"13":{"user_type_code":"luvs","brand_user_type_label":"luvs"},"14":{"user_type_code":"luvsdiapers","brand_user_type_label":"luvsdiapers"},"15":{"user_type_code":"mom365","brand_user_type_label":"mom365"},"16":{"user_type_code":"mom365_1","brand_user_type_label":"mom365_1"},"17":{"user_type_code":"mom365_2","brand_user_type_label":"mom365_2"},"18":{"user_type_code":"mom365_3","brand_user_type_label":"mom365_3"},"19":{"user_type_code":"mom365_4","brand_user_type_label":"mom365_4"},"20":{"user_type_code":"mom365_5","brand_user_type_label":"mom365_5"},"21":{"user_type_code":"mom365_import","brand_user_type_label":"mom365_import"},"22":{"user_type_code":"mykidstime","brand_user_type_label":"mykidstime"},"23":{"user_type_code":"sentosa","brand_user_type_label":"sentosa"},"24":{"user_type_code":"tweekaboo","brand_user_type_label":"tweekaboo"},"25":{"user_type_code":"tweekaboo_blogger","brand_user_type_label":"tweekaboo_blogger"},"26":{"user_type_code":"tweekaboo_luvs","brand_user_type_label":"tweekaboo_luvs"}}}
            )
        },2000);
    },
    'get /user': function(req, res) {
        setTimeout(function(){
            res.json({
                "code":200, 
                "list": [
                    {
                        id : 1,
                        first_name : 'fn',
                        surname : 'sn01'
                    },
                    {
                        id : 2,
                        first_name : 'fn',
                        surname : 'sn02',
                    },
                    {
                        id : 3,
                        first_name : 'fn',
                        surname : 'sn03',
                    },
                    {
                        id : 4,
                        first_name : 'fn',
                        surname : 'sn04',
                    }
                ]
            });
        },2000);
    },
    'get /login': function(req, res) {
        res.json({
            "status": true
        });
    }
};