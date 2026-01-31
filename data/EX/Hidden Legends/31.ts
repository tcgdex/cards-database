import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine",
		de: "Lepumentas"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				de: "Hyper Beam"
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez 1 Énergie attachée au Pokémon Défenseur.",
				de: "Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ram"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276076,
		tcgplayer: 84333
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
