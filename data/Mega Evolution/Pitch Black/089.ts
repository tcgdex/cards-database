import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Manectric",
		fr: "Élecsprint",
		es: "Manectric",
		'es-mx': "Manectric",
		de: "Voltenso"
	},

	illustrator: "HICO KIM",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [310],
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electrike"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flash Barrier"
		},

		cost: ["Lightning", "Lightning"],

		damage: 50,

		effect: {
			en: "During your opponent's next turn, this Pokémon won't receive damage from your opponent's Evolution Pokémon's attacks"
		}
	}, {
		name: {
			en: "Sonic Edge"
		},

		cost: ["Lightning", "Lightning", "Lightning"],

		damage: 110,

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895873,
				tcgplayer: 704846
			}
		},
	],
}

export default card
