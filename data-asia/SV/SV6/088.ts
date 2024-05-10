import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "コアルヒー",
		'zh-tw': "鴨寶寶"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Shibuzoh.",
	dexId: [580],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "エサの 水苔を 探し 池の 深い場所を 泳ぎまわりながら 体を 鍛えているのだ。",
		'zh-tw': "會在池塘水深的地方 四處游動找水苔來吃， 順便鍛鍊身體。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダブルドロー",
			'zh-tw': "雙重抽出"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "するどいはね",
			'zh-tw': "銳利羽"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card