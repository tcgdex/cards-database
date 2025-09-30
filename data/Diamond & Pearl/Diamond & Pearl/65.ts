import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Unown A",
		fr: "Zarbi A",
		de: "Icognito A"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Analyze",
				fr: "ANALYSER",
				de: "ANALYZE"
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown A is on your Bench, you may look at the top 2 cards of your deck and put them back on top of your deck in any order.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi A est sur votre Banc, vous pouvez regarder les 2 cartes du dessus de votre deck et les replacer au dessus de votre deck dans n'importe quel ordre.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Icognito A auf deiner Bank liegt, kannst du dir die obersten 2 Karten deines Decks anschauen. Lege sie danach in beliebiger Reihenfolge wieder auf dein Deck zurück."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de Zarbi est apparu en premier."
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
