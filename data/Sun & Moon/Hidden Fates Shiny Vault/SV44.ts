import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
		de: "Kommandutan"
	},
	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		765,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Instruct",
				fr: "Sommation",
				de: "Kommando"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw cards until you have 3 cards in your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu’à ce que vous ayez 3 cartes en main.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du so lange Karten ziehen, bis du 3 Karten auf deiner Hand hast."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		en: "Deep in the jungle, high in the lofty canopy, this Pokémon abides. On rare occasions, it shows up at the beach to match wits with Slowking.",
		de: "Lebt auf Baumwipfeln im tiefsten Dschungel. Ab und an erscheint es am Strand, um sich epische Quiz-Duelle mit Laschoking zu liefern."
	},
}

export default card
