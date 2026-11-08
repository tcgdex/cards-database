import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Kyogre",
		'fr-fr': "Kyogre",
		'de-de': "Kyogre"
	},

	illustrator: "Ryo Ueda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [382],

	hp: 100,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Destructive Tsunami",
				'fr-fr': "Tsunami destructeur",
				'de-de': "Zerstörerischer Tsunami"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage to each of your opponent's Pokémon. If tails, this attack does 40 damage to each of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts à chaque Pokémon de votre adversaire. Si c’est pile, cette attaque inflige 40 dégâts à chacun de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff jedem Pokémon deines Gegners 40 Schadenspunkte zu. Bei \"Zahl\" fügt dieser Angriff jedem deiner Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 4,

	description: {
		'en-us': "A mythical Pokémon said to have swelled the seas with rain and tidal waves. It battled with Groudon.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86550,
				cardmarket: 279638
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86550,
				cardmarket: 279638
			},
		},
	],

}

export default card
