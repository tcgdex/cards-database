import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Rosélia",
		es: "Roselia",
		it: "Roselia",
		pt: "Roselia",
		de: "Roselia"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 70,

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
				fr: "Vole-Vie",
				es: "Absorber",
				it: "Assorbimento",
				pt: "Absorção",
				de: "Absorber"
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts de ce Pokémon.",
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

	retreat: 1,
	regulationMark: "D"
}

export default card
