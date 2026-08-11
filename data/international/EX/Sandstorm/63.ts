import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Evoli",
		'de-de': "Evoli"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [133],

	hp: 50,

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
				'en-us': "Signs of Evolution",
				'fr-fr': "Signes d'Évolution",
				'de-de': "Signs of Evolution"
			},
			effect: {
				'en-us': "Search your deck for up to 3 cards that evolve from Eevee, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck jusqu'à trois cartes qui évoluent d'Evoli, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for up to 3 cards that evolve from Eevee, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Quick Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275840,
				tcgplayer: 85073
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275840,
				tcgplayer: 85073
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125144
			}
		}
	],

}

export default card
