import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
		es: "Nidoking",
		it: "Nidoking",
		pt: "Nidoking",
		de: "Nidoking"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
		de: "Nidorino"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lovestrike",
				fr: "Coup de Foudre",
				de: "Liebestaumel"
			},
			effect: {
				en: "Does 40 more damage for each Nidoqueen on your Bench.",
				fr: "Inflige 40 dégâts supplémentaires pour chaque Nidoqueen sur votre Banc.",
				de: "Dieser Angriff fügt für jedes Nidoqueen auf deiner Bank 40 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal'Korne",
				de: "Hornbohrer"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
		de: "Ein Schlag mit seinem gewaltigen Schweif kann einen Telegrafenmasten knicken wie ein Streichholz."
	},

	thirdParty: {
		cardmarket: 280936,
		tcgplayer: 87700
	}
}

export default card
