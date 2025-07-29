import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		112,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		es: "Rhyhorn",
		it: "Rhyhorn",
		pt: "Rhyhorn",
		de: "Rihorn"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				es: "Derribo",
				it: "Riduttore",
				pt: "Desmantelar",
				de: "Bodycheck"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
				es: "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 10 danni a se stesso.",
				pt: "Esse Pokémon causa 10 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal'Korne",
				es: "Perforador",
				it: "Perforcorno",
				pt: "Chifre Broca",
				de: "Hornbohrer"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 273606
	}
}

export default card
