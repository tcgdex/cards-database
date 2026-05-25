import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Wimpod"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [767],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw"
		},

		cost: ["Water"],
		damage: 10
	}, {
		name: {
			en: "Corkscrew Punch"
		},

		cost: ["Colorless", "Colorless"],
		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693562
			}
		}
	],
}

export default card