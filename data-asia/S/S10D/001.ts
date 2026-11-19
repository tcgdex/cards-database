import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤンヤンマ",
		'zh-tw': "蜻蜻蜓"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [193],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "その翅 彼方 透け見えるほど 薄く 頼りなし。 しかれども 飛翔し際は 大気乱し 人家 吹き飛ばす 力あり。",
		'zh-tw': "翅膀看似脆弱，薄到可以透光。 然而當牠飛翔之時卻能拂亂大氣， 發揮足以吹倒家屋的強勁力道。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "スピードひこう",
			'zh-tw': "高速飛行"
		},

		damage: 20,
		cost: ["Grass"]
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
				cardmarket: 650961,
				tcgplayer: 569756,
				cardtrader: 234067,
			},
		},
	]
}

export default card