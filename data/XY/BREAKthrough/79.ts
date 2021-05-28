import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Marowak BREAK",
		fr: "Ossatueur TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Marowak",
		fr: "Ossatueur",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Bone Revenge",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "This attack does 40 more damage for each Prize card your opponent has taken.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Os Vengeance",
			},
			effect: {
				fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			},
			damage: "20+",

		},
	],






}

export default card
