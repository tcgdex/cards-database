import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [96],
	set: Set,

	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Psychic"
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Boom"
			},
			effect: {
				'en-us': "This attack does 10 damage times the amount of Energy attached to your opponent's Active Pokémon."
			},
			damage: "10×"
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt"
			},
			damage: 20
		},
	],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297256,
				tcgplayer: 152875
			}
		},
	],

}

export default card