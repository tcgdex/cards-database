import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Manaphy",
		'fr-fr': "Manaphy"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [490],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Dive",
				'fr-fr': "Plongée"
			},
			effect: {
				'en-us': "Look at the top 7 cards of your deck, choose 1 of them, and put it into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.",
				'fr-fr': "Regardez les 7 cartes du dessus de votre deck. Choisissez-en 1 et placez-la dans votre main. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Glow",
				'fr-fr': "Eau scintillante"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Remove from Manaphy the number of damage counters equal to the damage you did to that Pokémon.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Ensuite, retirez à Manaphy autant de marqueurs de dégât que vous avez infligé de dégâts à ce Pokémon."
			}

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It is born with a wondrous power that lets it bond with any kind of Pokémon.",
		'fr-fr': "Il est né avec le pouvoir incroyable de créer des liens avec n'importe quel Pokémon."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87147,
				cardmarket: 278553
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87147,
				cardmarket: 278553
			},
		},
	],

}

export default card
