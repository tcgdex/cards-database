import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Torkoal",
		'fr-fr': "Chartor",
		'de-de': "Qurtel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [324],

	hp: 80,

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
				'en-us': "Super Singe",
				'fr-fr': "Ça sent le roussi!",
				'de-de': "Super Singe"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Burned."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flame Ball",
				'fr-fr': "Boule de feu",
				'de-de': "Flame Ball"
			},
			effect: {
				'en-us': "Move an Energy card attached to Torkoal to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une carte Énergie attachée à Charcor sur 1 des Pokémon de votre Banc.",
				'de-de': "Move an Energy card attached to Torkoal to 1 of your Benched Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It burns coal inside its shell for energy. It blows out black soot if it is endangered."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89971,
				cardmarket: 278521
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278521,
				tcgplayer: 89971
			}
		}
	],

}

export default card
