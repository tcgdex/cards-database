import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "マクノシタ"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [296],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "ねこだまし"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手をマヒにする。"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784517,
				tcgplayer: 613043,
				cardtrader: 138017,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784517,
				tcgplayer: 613043,
				cardtrader: 138017,
			},
		},
	]
}

export default card
