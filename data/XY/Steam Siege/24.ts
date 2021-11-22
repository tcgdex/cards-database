import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Pyroar BREAK",
		fr: "Némélios TURBO",
		es: "Pyroar TURBO",
		it: "Pyroar TURBO",
		pt: "Pyroar TURBO",
		de: "Pyroleo-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		668,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Pyroar",
		fr: "Némélios",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Kaiser Tackle",
				fr: "Charge Impériale",
				es: "Placaje Káiser",
				it: "Azione Imperiale",
				pt: "Colisão do Imperador",
				de: "Kaiser-Tackle"
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
				fr: "Ce Pokémon s'inflige 50 dégâts.",
				es: "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 50 danni a se stesso.",
				pt: "Este Pokémon causa 50 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 180,

		}
	],

	retreat: 0
}

export default card
