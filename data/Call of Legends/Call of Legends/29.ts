import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		de: "Pantimos"
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
				en: "Trick Reveal",
				fr: "Ruse dévoilée",
				de: "Trickenthüllung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may have both you and your opponent reveal your hands. This power can't be used if Mr. Mime is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir de révéler votre main à votre adversaire et de voir la sienne. Ce pouvoir ne peut pas être utilisé si M. Mime est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dich dafür entscheiden, beide Spieler ihre Handkarten aufdecken zu lassen. Diese Poké-Power kann nicht verwendet werden, wenn Pantimos von einem Speziellen Zustand betroffen ist."
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
				en: "Juggling",
				fr: "Jonglerie",
				de: "Jongleur"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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
		en: "Its fingertips emit a peculiar force field that hardens air to create an actual wall.",
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
