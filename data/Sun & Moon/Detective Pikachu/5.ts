import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		it: "Charizard",
		pt: "Charizard",
		de: "Glurak"
	},

	illustrator: "Framestore",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 180,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 70,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Tackle",
				fr: "Tacle Brutal",
				es: "Placaje Salvaje",
				it: "Azionferoce",
				pt: "Investida Feroz",
				de: "Wilder Tackle"
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige 50 dégâts.",
				es: "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 50 danni a se stesso.",
				pt: "Este Pokémon causa 50 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 370770
	}
}

export default card
