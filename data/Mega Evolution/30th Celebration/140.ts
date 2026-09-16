import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Scraggy"
	},

	illustrator: "GOSSAN",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [559],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	description: {
		en: "Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling its skin up to its neck."
	},

	attacks: [{
		name: {
			en: "Nitpick"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent shuffles their hand into their deck and draws 4 cards."
		}
	}, {
		name: {
			en: "Corkscrew Punch"
		},

		cost: ["Darkness", "Colorless"],

		damage: 30,
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907748,
				tcgplayer: 716225
			}
		}
	],
}

export default card
