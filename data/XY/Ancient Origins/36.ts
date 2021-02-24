import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Hoopa-EX",
		fr: "Hoopa-EX",
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		720,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scoundrel Ring",
				fr: "Anneau Malicieux",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may search your deck for up to 3 Pokémon-EX (except for Hoopa-EX), reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez chercher jusqu'à 3 Pokémon-EX(à part Hoopa-EX) dans votre deck, les montrer et les ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Hyperspace Fury",
				fr: "Furie Dimension",
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon. This attack does 100 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies attachées à ce Pokémon. Cette attaque inflige 100 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
