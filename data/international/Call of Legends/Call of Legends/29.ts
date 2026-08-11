import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'de-de': "Pantimos"
	},

	illustrator: "Noriko Hotta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [122],

	hp: 70,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Trick Reveal",
				'fr-fr': "Ruse dévoilée",
				'de-de': "Trickenthüllung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may have both you and your opponent reveal your hands. This power can't be used if Mr. Mime is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir de révéler votre main à votre adversaire et de voir la sienne. Ce pouvoir ne peut pas être utilisé si M. Mime est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dich dafür entscheiden, beide Spieler ihre Handkarten aufdecken zu lassen. Diese Poké-Power kann nicht verwendet werden, wenn Pantimos von einem Speziellen Zustand betroffen ist."
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
				'en-us': "Juggling",
				'fr-fr': "Jonglerie",
				'de-de': "Jongleur"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Its fingertips emit a peculiar force field that hardens air to create an actual wall.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87594,
				cardmarket: 279672
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87594,
				cardmarket: 279672
			},
		},
	],

}

export default card
