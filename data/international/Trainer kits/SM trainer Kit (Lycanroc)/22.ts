import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [733],
	set: Set,

	name: {
		'en-us': "Toucannon",
		'fr-fr': "Bazoucan",
		'es-es': "Toucannon",
		'it-it': "Toucannon",
		'pt-br': "Toucannon",
		'de-de': "Tukanon"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Trumbeak",
		'fr-fr': "Piclairon",
		'es-es': "Trumbeak",
		'it-it': "Trumbeak",
		'pt-br': "Trumbeak",
		'de-de': "Trompeck"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Echoed Voice"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Echoed Voice attack does 60 more damage (before applying Weakness and Resistance)."
			},
			damage: 60
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beak Blast"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Burned."
			},
			damage: 100
		},
	],
	stage: "Stage2",
	retreat: 2,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297256,
				tcgplayer: 152848
			}
		},
	],

}

export default card