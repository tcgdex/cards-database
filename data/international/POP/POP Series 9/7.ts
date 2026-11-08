import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [453],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Nimble",
				'fr-fr': "Agilité"
			},
			effect: {
				'en-us': "If you have Turtwig in play, remove from Croagunk the number of damage counters equal to the damage you did to the Defending Pokémon.",
				'fr-fr': "Si vous avez un Tortipouss en jeu, retirez à Cradopaud autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	retreat: 2,

	description: {
		'en-us': "Inflating its poison sacs, it makes an eerie blubbering sound for intimidation.",
		'fr-fr': "Il émet un gargouillis étrange en gonflant ses glandes de poison pour intimider l'ennemi."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84476,
				cardmarket: 278558
			},
		},
	],

}

export default card
