import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		189,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fluffy Transport",
				fr: "Transport Coton",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Solar Step",
				fr: "Démarche Solaire",
			},
			effect: {
				en: "This attack does 20 damage times the number of your remaining Prize cards.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de vos cartes Récompense.",
			},
			damage: 20,

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
