import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Vivillon",
		fr: "Prismillon",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		666,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Conversion Powder",
				fr: "Poudre Altérante",
			},
			effect: {
				en: "Choose either Asleep or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.",
				fr: "Choisissez soit Endormi, soit Empoisonné. Le Pokémon Actif de votre adversaire est maintenant affecté par l'État Spécial choisi.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Colorful Wind",
				fr: "Couleur du Vent",
			},
			effect: {
				en: "This attack does 30 more damage for each different type of basic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque différent type d'Énergie de base attaché à ce Pokémon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
