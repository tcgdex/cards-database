import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
		es: "Gigalith",
		it: "Gigalith",
		pt: "Gigalith",
		de: "Brockoloss"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		526,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Revenge Cannon",
				fr: "Canon Talion",
			},
			effect: {
				en: "Does 10 more damage for each damage counter on each of your Benched Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur chacun de vos Pokémon de Banc.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque Imprudente",
			},
			effect: {
				en: "This Pokémon does 40 damage to itself.",
				fr: "Ce Pokémon s'inflige 40 dégâts.",
			},
			damage: 120,

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
		cardmarket: 280506
	}
}

export default card
