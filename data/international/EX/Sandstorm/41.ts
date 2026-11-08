import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'de-de': "Stollrak"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [305],

	hp: 70,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Iron Defense",
				'fr-fr': "Mûr de fer",
				'de-de': "Iron Defense"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Lairon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Galegon lors du prochain tour de votre adversaire.",
				'de-de': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Lairon during your opponent's next turn."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Headbutt"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275818,
				tcgplayer: 86575
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275818,
				tcgplayer: 86575
			}
		},
	],

}

export default card
