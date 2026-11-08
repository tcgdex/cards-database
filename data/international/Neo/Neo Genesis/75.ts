import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'de-de': "Webarak"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		167,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scary Face",
				'fr-fr': "Grimace",
				'de-de': "Grimasse"
			},
			effect: {
				'en-us': "Flip a coin. If heads, until the end of your opponent's next turn the Defending Pokémon can't attack or retreat.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer ou battre en retraite jusqu'à la fin du prochain tour de votre adversaire.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' kann sich das Verteidigende Pokémon biis zum Ende des nächsten Zuges weder angreifen noch sich zurückziehen."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "String Shot",
				'fr-fr': "Sécrétion",
				'de-de': "Fadenschuss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It lies still in the same pose for days in its web, waiting for its unsuspecting prey to wander close.",
		'fr-fr': "Il reste immobile dans sa toile pendant des jours, à l'affût d'une proie vulnérable."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274475,
				tcgplayer: 89453
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274475,
				tcgplayer: 89453
			}
		}
	]
}

export default card
