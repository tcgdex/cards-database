import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Raticate BREAK",
		fr: "Rattatac TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Raticate",
		fr: "Rattatac",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Fang",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Put damage counters on your opponent’s Active Pokémon until its remaining HP is 10.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Croc Fatal",
			},
			effect: {
				fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ait 10 PV.",
			},

		},
	],

	retreat: 0
}

export default card
