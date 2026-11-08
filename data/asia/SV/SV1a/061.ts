import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "エンニュート",
		'zh-tw': "焰后蜥",
		'th-th': "เอ็นนิวท์",
		'id-id': "Salazzle"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [758],
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "毒ガスで クラクラにした 相手を 妖艶な 身のこなしで 誘惑し 忠実な しもべに してしまう。",
		'zh-tw': "會用妖豔的身姿誘惑被牠的毒瓦斯弄得頭昏眼花的對手， 使其變成自己忠實的僕人。",
		'th-th': "ยั่วยวนคู่ต่อสู้ที่มึนงงเพราะแก๊สพิษด้วยท่าทีเย้ายวน ทำให้อีกฝ่ายกลายเป็นผู้รับใช้ที่ซื่อสัตย์",
		'id-id': "Salazzle menggunakan sosoknya yang memesona untuk memikat lawan yang terhuyung-huyung akibat gas beracun dan menjadikan mereka bawahan yang setia."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "ガスでつつむ",
			'zh-tw': "瓦斯包圍",
			'th-th': "ห่อหุ้มด้วยแก๊ส",
			'id-id': "Gas yang Menyelimuti"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'ja-jp': "ひっぱたく",
			'zh-tw': "重摑",
			'th-th': "ตบแรง",
			'id-id': "Menepuk"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701115,
				tcgplayer: 568184,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card