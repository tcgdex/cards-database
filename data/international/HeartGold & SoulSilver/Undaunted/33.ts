import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [26],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pain-full Punch",
				'fr-fr': "Mise au poing",
				'de-de': "Schmerzhafter Hieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Spark",
				'fr-fr': "Étincelle",
				'de-de': "Funkensprung"
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à l’un des Pokémon se trouvant sur le Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "When its electricity builds, its muscles are stimulated, and it becomes more aggressive than usual."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279286,
				tcgplayer: 88518
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279286,
				tcgplayer: 88518
			}
		}
	],

}

export default card
