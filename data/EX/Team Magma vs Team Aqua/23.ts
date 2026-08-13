import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Zangoose",
		fr: "Mangriff de Team Magma",
		de: "Team Magmas Sengo"
	},

	illustrator: "Zu-Ka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [335],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Freundesruf"
			},
			effect: {
				en: "Search your deck for a Colorless Basic Pokémon or Basic Pokémon with Team Magma in its name and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck un Pokémon de base  ou un Pokémon de base dont le nom comporte Team Magma et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einem {C} Basis-Pokémon oder einem Basis-Pokémon mit „Team Magma“ im Namen und lege es auf die Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Team Play",
				fr: "Jeu d'équipe",
				de: "Teamgeist"
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play with Team Magma in its name.",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon en jeu dont les noms comportent Team Magma.",
				de: "Fügt für jedes Pokémon im Spiel mit „Team Magma“ im Namen 10 Schadenspunkte zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275800,
				tcgplayer: 89846
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275800,
				tcgplayer: 89846
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				cardmarket: 871828,
				tcgplayer: 477453
			}
		}
	],

}

export default card
