import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Lunatone",
		'fr-fr': "Seleroc",
		'de-de': "Lunastein"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [337],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Lunar Blast",
				'fr-fr': "Explosion lunaire",
				'de-de': "Mondsturm"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Selfdestruct",
				'fr-fr': "Destruction",
				'de-de': "Finale"
			},
			effect: {
				'en-us': "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.) Lunatone does 60 damage to itself.",
				'fr-fr': "Cette attaque inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).(N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Seleroc s’inflige 60 dégâts.",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank (deinen und denen deines Gegners) 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Lunastein fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It was discovered at the site of a meteor strike 40 years ago. Its stare can lull its foes to sleep."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86928,
				cardmarket: 279555
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279555,
				tcgplayer: 86928
			}
		},
	],

}

export default card
