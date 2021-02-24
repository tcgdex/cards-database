import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		584,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Enefountain",
				fr: "Fontaine d'Énergie",
			},
			effect: {
				en: "Attach 2 basic Energy cards from your hand to 1 of your Pokémon.",
				fr: "Attachez 2 cartes Énergie de base de votre main à 1 de vos Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Blizzard",
				fr: "Blizzard",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
