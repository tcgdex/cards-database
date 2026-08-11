import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Swampert",
		'fr-fr': "Laggron",
		'de-de': "Sumpex"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Marshtomp",
		'fr-fr': "Flobio"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Water Cyclone",
				'fr-fr': "Cyclone d'O",
				'de-de': "Water Cyclone"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a Water Energy attached to 1 of your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Swampert is affected by a Special Condition.",
				'fr-fr': "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer 1 Énergie  d'1 de vos Pokémon Actifs à 1 de vos Pokémon de Banc. Ce pouvoir ne peut pas être utilisé si Laggron est affecté par un État Spécial.",
				'de-de': "As often you like during your turn (before your attack), you may move a  Energy attached to 1 of your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Swampert is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spinning Tail",
				'fr-fr': "Queue tournante",
				'de-de': "Spinning Tail"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Sonic",
				'fr-fr': "Aquasonique",
				'de-de': "Aqua Sonic"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "This attack's damage isn't affected by Resistance."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 97731,
		cardmarket: 276522
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 97731,
				cardmarket: 276522
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 97731,
				cardmarket: 276522
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89678,
			},
		}
	],
}

export default card
