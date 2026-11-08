import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ワッカネズミ",
		'zh-tw': "一對鼠",
		'id-id': "Tandemaus"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	dexId: [924],
	hp: 30,
	types: ["Colorless"],

	description: {
		'ja-jp': "息の合った コンビネーションで 巣の 材料に なりそうなものを 前歯で 切り出して 運び去る。",
		'zh-tw': "會以絕佳的團隊合作，把能當成巢穴建材的東西 用門牙切斷後搬走。",
		'id-id': "Dengan kombinasi yang serasi, pasangan Tandemaus memotong benda yang kelihatannya dapat dijadikan bahan-bahan untuk membuat sarang menggunakan gigi depan dan membawanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "もってくる",
			'zh-tw': "呼喚",
			'id-id': "Mengumpulkan"
		},

		effect: {
			'ja-jp': "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			'id-id': "Ambil 2 kartu dari atas Deck sendiri."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ひっぱたく",
			'zh-tw': "重摑",
			'id-id': "Menepuk"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747671,
				tcgplayer: 567717,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card