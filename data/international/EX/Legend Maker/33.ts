import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Furret",
		'fr-fr': "Fouinar",
		'de-de': "Wiesenior"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		162,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Bodyslam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Do the Wave",
				'fr-fr': "Faites la vague",
				'de-de': "Wellenreiten"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each of your Benched Pokémon.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon que vous avez sur votre Banc.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon auf deiner Bank zu."
			},
			damage: "10+",

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
		cardmarket: 276910,
		tcgplayer: 85592
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
