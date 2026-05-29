import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cut Down",
				fr: "Retranchement",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slicing Blade",
				fr: "Lame Tranchante",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "This pitiless Pokémon commands a group of Pawniard to hound prey into immobility. It then moves in to finish the prey off.",
	},

	thirdParty: {
		cardmarket: 280952,
		tcgplayer: 83849
	}
}

export default card
