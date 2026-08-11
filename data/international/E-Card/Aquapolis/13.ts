import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'de-de': "Kokowei"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [103],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Big Eggsplosion",
				'fr-fr': "Grosse éclate",
				'de-de': "Big Eggsplosion"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the amount of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez un nombre de pièces équivalent au nombre d'Énergie attachées à Noadkoko. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip a number of coins equal to the amount of Energy attached to Exeggutor. This attack does 20 damage times the number of heads."
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lateral Eggsplosion",
				'fr-fr': "Éclate latérale",
				'de-de': "Lateral Eggsplosion"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the amount of Energy attached to all of of your Benched Pokémon. This attack does 30 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez un nombre de pièces égal à la quantité d'Énergie attachée à tous les Pokémon de votre Banc. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				'de-de': "Flip a number of coins equal to the amount of Energy attached to all of your Benched Pokémon. This attack does 30 damage plus 10 more damage for each heads."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85356,
				cardmarket: 275084
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85356,
				cardmarket: 275084
			}
		},
	]
}

export default card
