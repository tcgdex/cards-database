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

	dexId: [
		335,
	],

	hp: 70,

	types: [
		"Colorless",
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
				de: "Call for Family"
			},
			effect: {
				en: "Search your deck for a Colorless Basic Pokémon or Basic Pokémon with Team Magma in its name and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck un Pokémon de base  ou un Pokémon de base dont le nom comporte Team Magma et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Search your deck for a  Basic Pokémon or Basic Pokémon with Team Magma in its name and put it onto your Bench. Shuffle your deck afterward."
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
				de: "Team Play"
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play with Team Magma in its name.",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon en jeu dont les noms comportent Team Magma.",
				de: "Does 10 damage times the number of Pokémon in play with Team Magma in its name."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276000,
		tcgplayer: 89846
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		}
	]
}

export default card
