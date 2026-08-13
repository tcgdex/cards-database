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
		fr: "Chenipotte",
		de: "Waumpel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Emerge",
				fr: "Émerge",
				de: "Erscheinen"
			},
			effect: {
				en: "Once during your turn (before your attack), if Cascoon is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward. This power can't be used if Cascoon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Blindalys est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre deck une carte qui évolue de Blindalys et placez-la sur Blindalys (vous le faites ainsi évoluer). Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Blindalys est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Panekon dein Aktives Pokémon ist, wirf 1 Münze. Bei „Kopf“ durchsuche dein Deck nach einer Karte, die sich aus Panekon entwickelt, und lege diese auf Panekon. (Dies zählt als Entwickeln.) Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Panekon von einem Speziellem Zustand betroffen ist."
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
