import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンメル"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [322],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "ずつき"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "まるやき"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモン全員を、それぞれやけどにする。"
		},

		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784496,
				tcgplayer: 613044,
				cardtrader: 137996,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784496,
				tcgplayer: 613044,
				cardtrader: 137996,
			},
		},
	]
}

export default card
