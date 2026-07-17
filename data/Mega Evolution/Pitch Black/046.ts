import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "By spinning its body, it can dig straight through the ground at a speed of 30 mph."
	},

	name: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		'es-mx': "Drilbur",
		de: "Rotomurf"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [529],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Call for Family"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them on your bench. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Claw Slash"
		},

		cost: ["Colorless", "Colorless"],

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895832,
				tcgplayer: 704803
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895832,
				tcgplayer: 704803
			}
		},
	],
}

export default card
