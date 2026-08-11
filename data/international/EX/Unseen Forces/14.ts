import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Slowking",
		'fr-fr': "Roigada",
		'de-de': "Laschoking"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Item Search",
				'fr-fr': "Recherche",
				'de-de': "Item Search"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Pokémon Tool card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Slowking is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre deck une carte Outil Pokémon. Montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may search your deck for a Pokémon Tool card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Slowking is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Aftermath",
				'fr-fr': "Séquelles",
				'de-de': "Afermath"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Pokémon Tool card in your discard pile. You can't add more than 60 damage in this way.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Outil Pokémon dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 60 dégâts de cette façon.",
				'de-de': "Does 20 damage plus 10 more damage for each Pokémon Tool card in your discard pile.You can't add more than 60 damage in this way."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89314,
				cardmarket: 276660
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89314,
				cardmarket: 276660
			},
		}
	],
}

export default card
