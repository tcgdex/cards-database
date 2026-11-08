import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic",
		'de-de': "Ibitak"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [22],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec"
	},

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Return",
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), choose an Energy card attached to 1 of your Pokémon and return it to your hand. This power can't be used if Espeon is affected by a Special Condition.",
			},
		},
	],
	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Clutch",
				'fr-fr': "Serre",
				'de-de': "Greifer"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Supersonic Flight",
				'fr-fr': "Vol supersonique",
				'de-de': "Superschallflug"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Wirkung."
			},

			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 0,
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85392,
				cardmarket: 274886
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85392,
				cardmarket: 274886
			},
		},
	],
}

export default card
