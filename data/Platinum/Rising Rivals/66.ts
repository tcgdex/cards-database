import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort Niv. 8",
		de: "Kokuna"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		14,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette",
				de: "Exoskelett"
			},
			effect: {
				en: "Any damage done to Kakuna by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à Coconfort par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Schaden, der Kokuna durch Angriffe zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Dangerous Evolution",
				fr: "Évolution dangereuse",
				de: "Gefährliche Entwicklung"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, search your deck for an Evolution card that evolves from Kakuna and put it onto Kakuna. (This counts as evolving Kakuna.) Shuffle your deck afterward.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Évolution qui évolue de Coconfort et placez-la sur Coconfort. (Vous le faites ainsi évoluer). Ensuite, mélangez votre deck.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach einer Evolutionskarte, die sich aus Kokuna entwickelt, und lege diese auf Kokuna. (Dies zählt als Entwickeln von Kokuna.) Mische dein Deck danach."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
