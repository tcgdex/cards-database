import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		463,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Licking Shot",
				fr: "Léchouille",
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. This attack does 10 damage to that Pokémon for each Energy attached to Lickilicky. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 10 dégâts à ce Pokémon pour chaque carte Énergie attachée à Coudlangue. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stick and Absorb",
				fr: "Colle et absorbe",
			},
			effect: {
				en: "Remove 2 damage counters from Lickilicky. The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Retirez 2 marqueurs de dégât à Coudlangue. Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It has space in its throat to store saliva. It can also roll up its tongue and store it in the same spot."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
