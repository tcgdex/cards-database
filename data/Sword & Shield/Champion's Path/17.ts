import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Gardevoir VMAX",
		fr: "Gardevoir VMAX",
		es: "Gardevoir VMAX",
		it: "Gardevoir VMAX",
		pt: "Gardevoir VMAX",
		de: "Guardevoir VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	dexId: [282],
	set: Set,
	hp: 320,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gardevoir V",
		fr: "Gardevoir-V"
	},

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Max Cure",
				fr: "Soignomax",
				es: "Maxicura",
				it: "Dynacura",
				pt: "Cura Max",
				de: "Dyna-Heilung"
			},
			effect: {
				en: "Heal 50 damage from this Pokémon.",
				fr: "Soignez 50 dégâts de ce Pokémon.",
				es: "Cura 50 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 50 danni.",
				pt: "Cure 50 pontos de dano deste Pokémon.",
				de: "Heile 50 Schadenspunkte bei diesem Pokémon."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 499940,
		tcgplayer: 222328
	}
}

export default card
