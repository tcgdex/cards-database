import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 90,
	types: [
		"Psychic",
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
			],
			name: {
				en: "Psy Alert",
				fr: "Alerte Psychique",
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadow Ball",
				fr: "Ball'Ombre",
			},
			effect: {
				en: "This attack does 40 damage to 1 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
				fr: "Cette attaque inflige 40 dégâts à 1 des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
