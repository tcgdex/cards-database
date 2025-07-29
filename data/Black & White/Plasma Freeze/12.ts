import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
		es: "Flareon",
		it: "Flareon",
		pt: "Flareon",
		de: "Flamara"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeance",
				fr: "Rétorsion",
			},
			effect: {
				en: "Does 10 more damage for each Pokémon in your discard pile.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Tackle",
				fr: "Charge Énergétique",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
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

	retreat: 2,

	thirdParty: {
		cardmarket: 280890
	}
}

export default card
