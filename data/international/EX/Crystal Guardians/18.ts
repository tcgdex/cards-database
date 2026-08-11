import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Fearow δ",
		'fr-fr': "Rapasdepic δ",
		'de-de': "Ibitak"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		22,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Delta Sign",
				'fr-fr': "Signe Delta",
				'de-de': "Delta-Zeichen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Pokémon that has δ on its card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. You can't use more than 1 Delta Sign Poké-Power each turn. This power can't be used if Fearow is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre deck un Pokémon possédant le symbole δ. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Signe Delta par tour. Ce pouvoir ne peut pas être utilisé si Rapasdepic est affecté par un État Spécial.",
				'de-de': "Während deines Zuges (vor deinem Angriff) kannst du ein Mal dein Deck nach einem Pokémon, auf dem δ zu sehen ist, durchsuchen. Zeige es deinem Gegner und nimm es auf die Hand. Mische dein Deck danach. Du kannst nicht mehr als 1 Delta-Zeichen Poké-Power pro Zug einsetzen. Diese Poké-Power kann nicht benutzt werden, wenn Ibitak von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercer",
				'de-de': "Durchbohren"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277099
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		}
	]
}

export default card
