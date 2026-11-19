import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "メガヤンマ",
		'zh-tw': "遠古巨蜓"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [469],
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		ja: "ヤンヤンマ"
	},

	description: {
		ja: "６本の 脚で 大人を 抱えて 楽々と 飛ぶ ことが できる。 尻尾の 羽で バランスを とる。",
		'zh-tw': "能以６隻腳攫住成年人 並輕鬆地飛行。 以尾部的翅膀保持平衡。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "するどいはね",
			'zh-tw': "銳利羽"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			ja: "ワイドウイング",
			'zh-tw': "廣域之翼"
		},

		effect: {
			ja: "自分の手札の枚数が、相手の手札の枚数より多いなら、80ダメージ追加。",
			'zh-tw': "若自己手牌的張數比對手手牌的張數多，則增加80點傷害。"
		},

		damage: "40+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650962,
				tcgplayer: 569757,
				cardtrader: 234068,
			},
		},
	]
}

export default card