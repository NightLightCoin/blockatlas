/// Mock for external Decred API
/// See:
/// curl "http://{decred rpc}/address/DsTxPUVFxXeNgu5fzozr4mTR4tqqMaKcvpY?details=txs"
/// curl "http://localhost:3000/decred-api/address/DsTxPUVFxXeNgu5fzozr4mTR4tqqMaKcvpY?details=txs"
/// curl "http://localhost:8420/v1/decred/address/DsTxPUVFxXeNgu5fzozr4mTR4tqqMaKcvpY"

module.exports = {
    path: '/decred-api/address/:address?',
    template: function(params, query, body) {
        //console.log(params)
        //console.log(query)
        switch (params.address) {
            case 'DsTxPUVFxXeNgu5fzozr4mTR4tqqMaKcvpY':
                return JSON.parse(`
                    {
                        "page": 1,
                        "totalPages": 1,
                        "itemsOnPage": 1000,
                        "addrStr": "DsTxPUVFxXeNgu5fzozr4mTR4tqqMaKcvpY",
                        "balance": "0.19473147",
                        "totalReceived": "0.7496027",
                        "totalSent": "0.55487123",
                        "unconfirmedBalance": "0",
                        "unconfirmedTxApperances": 0,
                        "txApperances": 10,
                        "txs": [
                            {
                                "txid": "66e3d1622d4cb3337babf5e5a466f94b6a732e132c802cc219c6e26543d736e0",
                                "version": 1,
                                "vin": [
                                    {
                                        "txid": "2dc905f525885537310c8ab87f67dc175ca369af1fe7111a49a94451866aa019",
                                        "vout": 0,
                                        "sequence": 4294967291,
                                        "n": 0,
                                        "scriptSig": {
                                            "hex": "473044022045cb71f2c6c446a69cdf77cc7beedf6f4616091a7fc4843ef74757475f5a95c402203609e095561a11e0ac32f51de870a597b39dce4596b5b253842c838b7c4c9953012102eefcb948122fad71682df1ed8c59a9852afeffea086650e3a86e8a1214c0a94f"
                                        },
                                        "addresses": [
                                            "Dsjr1AbSRiZaN9PkCGaNyjfAVkbcPLozafq"
                                        ],
                                        "value": "0.00591955"
                                    }
                                ],
                                "vout": [
                                    {
                                        "value": "0.001",
                                        "n": 0,
                                        "scriptPubKey": {
                                            "hex": "76a91420cf523034c462f8e09fc0fd35c47760b822398888ac",
                                            "addresses": [
                                                "DsTxPUVFxXeNgu5fzozr4mTR4tqqMaKcvpY"
                                            ]
                                        },
                                        "spent": false
                                    },
                                    {
                                        "value": "0.00489415",
                                        "n": 1,
                                        "scriptPubKey": {
                                            "hex": "76a91420cf523034c462f8e09fc0fd35c47760b822398888ac",
                                            "addresses": [
                                                "DsTxPUVFxXeNgu5fzozr4mTR4tqqMaKcvpY"
                                            ]
                                        },
                                        "spent": false
                                    }
                                ],
                                "blockhash": "00000000000000000c12cb497e60470a3cf366d16705eaba303c2c4415cc7567",
                                "blockheight": 429609,
                                "confirmations": 5412,
                                "time": 1583516573,
                                "blocktime": 1583516573,
                                "valueOut": "0.00589415",
                                "valueIn": "0.00591955",
                                "fees": "0.0000254",
                                "hex": "010000000119a06a865144a9491a11e71faf69a35c17dc677fb88a0c3137558825f505c92d0000000000fbffffff02a08601000000000000001976a91420cf523034c462f8e09fc0fd35c47760b822398888acc77707000000000000001976a91420cf523034c462f8e09fc0fd35c47760b822398888ac0000000000000000015308090000000000dbcc05000b0000006a473044022045cb71f2c6c446a69cdf77cc7beedf6f4616091a7fc4843ef74757475f5a95c402203609e095561a11e0ac32f51de870a597b39dce4596b5b253842c838b7c4c9953012102eefcb948122fad71682df1ed8c59a9852afeffea086650e3a86e8a1214c0a94f"
                            },
                            {
                                "txid": "025abf340da79c4fc4de29667c08fc22cdafbded24c7c2a994a27f6fb4d5fa17",
                                "version": 1,
                                "vin": [
                                    {
                                        "txid": "5a2a0d01ed8672d6bebd7dee447b2e0342bfc34fd4893bed58a4fa5aa87a4c42",
                                        "vout": 0,
                                        "n": 0,
                                        "scriptSig": {
                                            "hex": "483045022100dd6997eab2e2bed5b275af4f2511a62b90da430ecb67f960afe4e06ebf8f362b022017e62873f5bd86abe725ef8fa75d506235ef174e18a06305b889d207ca6194e70121039603af712bd8410ada5a3b6c99d536b2e91dfaf4aa27e488b118cf6a9920e769"
                                        },
                                        "addresses": [
                                            "Dsf6WkLoiTcSGKmkXoSEdukqUfeRJMqUNJV"
                                        ],
                                        "value": "0.1999198"
                                    }
                                ],
                                "vout": [
                                    {
                                        "value": "0.001",
                                        "n": 0,
                                        "scriptPubKey": {
                                            "hex": "76a91420cf523034c462f8e09fc0fd35c47760b822398888ac",
                                            "addresses": [
                                                "DsTxPUVFxXeNgu5fzozr4mTR4tqqMaKcvpY"
                                            ]
                                        },
                                        "spent": false
                                    },
                                    {
                                        "value": "0.1988944",
                                        "n": 1,
                                        "scriptPubKey": {
                                            "hex": "76a914989b1aecabf1c24e213cc0f2d8a22ffee25dd4e188ac",
                                            "addresses": [
                                                "Dsesp1V6DZDEtcq2behmBVKdYqKMdkh96hL"
                                            ]
                                        },
                                        "spent": false
                                    }
                                ],
                                "blockhash": "0000000000000000264c499f21a7ef95bffb37148fc099514b2407dfa28c3287",
                                "blockheight": 429186,
                                "confirmations": 5835,
                                "time": 1583384838,
                                "blocktime": 1583384838,
                                "valueOut": "0.1998944",
                                "valueIn": "0.1999198",
                                "fees": "0.0000254",
                                "hex": "0100000001424c7aa85afaa458ed3b89d44fc3bf42032e7b44ee7dbdbed67286ed010d2a5a00000000000000000002a08601000000000000001976a91420cf523034c462f8e09fc0fd35c47760b822398888ac207d2f010000000000001976a914989b1aecabf1c24e213cc0f2d8a22ffee25dd4e188ac000000000000000001ac0d31010000000052630600050000006b483045022100dd6997eab2e2bed5b275af4f2511a62b90da430ecb67f960afe4e06ebf8f362b022017e62873f5bd86abe725ef8fa75d506235ef174e18a06305b889d207ca6194e70121039603af712bd8410ada5a3b6c99d536b2e91dfaf4aa27e488b118cf6a9920e769"
                            }
                        ]
                    }
                `);
        }
        return {error: "Not implemented"};
    }
}
