import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Tenefix",
		'de-de': "Zobiris"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Night Vision",
				'fr-fr': "Vision de nuit",
				'de-de': "Night Vision"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Sableye is your Active Pokémon, you may look at your opponent's hand. This power can't be used if Sableye is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Tenefix est votre Pokémon Actif, vous pouvez regarder la main de votre adversaire. Ce pouvoir ne peut pas être utilisé si Tenefix est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), if Sableye is your Active Pokémon, you may look at your opponent's hand. This power can't be used if Sableye is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Limitation",
				'fr-fr': "Restriction",
				'de-de': "Limitation"
			},
			effect: {
				'en-us': "Your opponent can't play any Supporter cards from his or her hand during your opponent's next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Supporter de sa main lors de son prochain tour.",
				'de-de': "Your opponent can't play any Supporter cards from his or her hand during your opponent's next turn."
			},

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88848,
				cardmarket: 276426
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88848,
				cardmarket: 276426
			},
		},
	],

}

export default card
