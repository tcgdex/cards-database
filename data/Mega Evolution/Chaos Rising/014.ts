import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886406,
				tcgplayer: 693505
			}
		},
	],

	name: {
		en: "Litleo"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [667],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle"
		},

		cost: ["Colorless"],
		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card