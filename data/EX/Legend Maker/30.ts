import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Cascoon",
		fr: "Blindalys",
		de: "Panekon"
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
		en: "Wurmple",
		fr: "Chenipotte"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Emerge",
				fr: "Émerge",
				de: "Emerge"
			},
			effect: {
				en: "Once during your turn (before your attack), if Cascoon is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward. This power can't be used if Cascoon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Blindalys est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre deck une carte qui évolue de Blindalys et placez-la sur Blindalys (vous le faites ainsi évoluer). Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Blindalys est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), if Cascoon is your Active Pokémon, youmay flip a coin. If heads, search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This count as evolving Cascoon.) Shuffle your deck afterward. This power can't be used if Cascoon is affected by a Special Condition."
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
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
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
