import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Shelmet",
		fr: "Escargaume",
		es: "Shelmet",
		it: "Shelmet",
		pt: "Shelmet",
		de: "Schnuthelm"
	},
	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		616,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Absorb",
				fr: "Vol-Vie",
				es: "Absorber",
				it: "Assorbimento",
				pt: "Absorção",
				de: "Absorber"
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts à ce Pokémon.",
				es: "Cura 10 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 10 danni.",
				pt: "Cure 10 pontos de dano deste Pokémon.",
				de: "Heile 10 Schadenspunkte bei diesem Pokémon."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
