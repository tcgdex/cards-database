import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Amoonguss",
		'fr-fr': "Gaulet",
		'es-es': "Amoonguss",
		'it-it': "Amoonguss",
		'pt-br': "Amoonguss",
		'de-de': "Hutsassa"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		591,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Astonish",
				'fr-fr': "Étonnement",
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 3 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into his or her deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 3 cartes au hasard de la main de votre adversaire. Votre adversaire montre les cartes choisies et les mélange avec son deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Miracle Powder",
				'fr-fr': "Poudre Miracle",
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 État Spécial. Le Pokémon Défenseur est maintenant affecté par l'État Spécial choisi.",
			},
			damage: 30,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It moves the caps on both arms and does a dance to lure prey. It prefers damp places.",
	},

	thirdParty: {
		cardmarket: 280753,
		tcgplayer: 83533
	}
}

export default card
