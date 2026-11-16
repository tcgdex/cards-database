import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ドガース"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [109],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "たいあたり"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "すてみタックル"
		},

		effect: {
			ja: "自分にも10ダメージ。"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
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
				cardmarket: 784485,
				tcgplayer: 613042,
				cardtrader: 137985,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784485,
				tcgplayer: 613042,
				cardtrader: 137985,
			},
		},
	]
}

export default card
