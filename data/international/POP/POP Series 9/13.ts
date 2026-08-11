import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [390],

	hp: 40,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Serial Swipes",
				'fr-fr': "Grands coups en série"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces."
			},
			damage: "10×",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleepy",
				'fr-fr': "Somnolent"
			},
			effect: {
				'en-us': "If you have Piplup in play, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Asleep.",
				'fr-fr': "Si vous avez Tiplouf en jeu, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	description: {
		'en-us': "Its fiery rear end is fueld by gas made in its belly. Even rain can’t extinguish the fire.",
		'fr-fr': "La flamme de sa queue est alimentée par un gaz de son estomac. Même la pluie ne saurait l'éteindre."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84289,
				cardmarket: 278564
			},
		},
	],

}

export default card
