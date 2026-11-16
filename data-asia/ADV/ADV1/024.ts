import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ラクライ"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [309],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "たいでん"
		},

		effect: {
			ja: "自分のトラッシュから{L}エネルギーを1枚選び出し、自分につける。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			ja: "でんげき"
		},

		effect: {
			ja: "コインを1回投げウラなら、自分にも10ダメージ。"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784508,
				tcgplayer: 613087,
				cardtrader: 138008,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784508,
				tcgplayer: 613087,
				cardtrader: 138008,
			},
		},
	]
}

export default card
