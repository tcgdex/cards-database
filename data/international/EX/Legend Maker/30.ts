import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
		'de-de': "Panekon"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		268,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Emerge",
				'fr-fr': "Émerge",
				'de-de': "Emerge"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Cascoon is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward. This power can't be used if Cascoon is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Blindalys est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre deck une carte qui évolue de Blindalys et placez-la sur Blindalys (vous le faites ainsi évoluer). Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Blindalys est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), if Cascoon is your Active Pokémon, youmay flip a coin. If heads, search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This count as evolving Cascoon.) Shuffle your deck afterward. This power can't be used if Cascoon is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
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

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276907,
		tcgplayer: 84120
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
