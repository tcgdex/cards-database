import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ジグザグマ"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [263],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "みだれひっかき"
		},

		effect: {
			ja: "コインを3回投げ、オモテ×10ダメージ。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784521,
				tcgplayer: 613052,
				cardtrader: 138021,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784521,
				tcgplayer: 613052,
				cardtrader: 138021,
			},
		},
	]
}

export default card
