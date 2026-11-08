import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'de-de': "Endivie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [152],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	effect: {
		'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
	},

	attacks: [
		{
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre toxik",
				'de-de': "Poisonpowder"
			},

			cost: ["Colorless"],


			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Flip a coin. If heads, the defending Pokémon is now Poisoned."
			}
		}
	],


	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84276,
				cardmarket: 276129
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84276,
				cardmarket: 276129
			}
		},
	]
}

export default card
