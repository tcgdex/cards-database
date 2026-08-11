import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ワッカネズミ",
		'zh-tw': "一對鼠",
		'th-th': "วักคาเนซูมิ",
		'id-id': "Tandemaus"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [924],
	hp: 40,
	types: ["Colorless"],

	description: {
		'ja-jp': "息の合った コンビネーションで 巣の 材料に なりそうなものを 前歯で 切り出して 運び去る。",
		'zh-tw': "會以絕佳的團隊合作，把能當成巢穴建材的東西 用門牙切斷後搬走。",
		'th-th': "ใช้ฟันหน้าตัดวัสดุที่น่าจะนำมาทำรังได้แล้วแบกกลับไปอย่างพร้อมเพรียง",
		'id-id': "Dengan kombinasi yang serasi, pasangan Tandemaus memotong benda yang kelihatannya dapat dijadikan bahan-bahan untuk membuat sarang menggunakan gigi depan dan membawanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "くっつく",
			'zh-tw': "附著",
			'th-th': "ติดหนึบ",
			'id-id': "Menempel"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "けとばす",
			'zh-tw': "踢飛",
			'th-th': "ดีด",
			'id-id': "Tendangan Penghempas"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705367,
				tcgplayer: 565925,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card