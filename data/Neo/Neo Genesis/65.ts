import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat",
		de: "Voltilamm"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		179,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Static Electricity",
				fr: "Électricité statique",
				de: "Statische Elektrizität"
			},
			effect: {
				en: "For each Mareep in play, you may search your deck for a Energy card and attach it to Mareep. Shuffle your deck afterward.",
				fr: "Pour chaque Wattouat en jeu, vous pouvez chercher une carte Énergie  dans votre deck et l'attacher à Mareep. Mélangez ensuite votre deck.",
				de: "Für jedes Voltilamm im Spiel kannst du dein Deck nach einer {L}-Energiekarte durchsuchen und sie an Voltilamm anlegen. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "If static electricity builds in its body, its fleece doubles in volume. Touching it will shock you.",
		fr: "Si de l'électricité statique s'accumule dans son corps, sa toison double de volume. Tout contact avec lui vous électrocute.",
		de: "Falls sich Statik in seinem Körper aufbaut, verdoppelt sich der Umfang seines Fells. Eine Berührung führt zu einem elektrischen Schlag."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274465,
				tcgplayer: 87193
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274465,
				tcgplayer: 87193
			}
		}
	]
}

export default card
