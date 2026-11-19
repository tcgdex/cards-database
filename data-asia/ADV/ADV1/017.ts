import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "キャモメ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [278],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "ふいをつく"
		},

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗する。"
		},

		damage: 20,
		cost: ["Water"]
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
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784501,
				tcgplayer: 613050,
				cardtrader: 138001,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784501,
				tcgplayer: 613050,
				cardtrader: 138001,
			},
		},
	]
}

export default card
