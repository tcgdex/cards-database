import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'de-de': "Flamara"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [136],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
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
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flamme",
				'de-de': "Flamethrower"
			},
			effect: {
				'en-us': "Discard a Fire Energy card attached to Flareon.",
				'fr-fr': "Défaussez une carte Énergie  attachée à Pyroli.",
				'de-de': "Discard a  Energy card attached to Flareon."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275782,
				tcgplayer: 85489
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275782,
				tcgplayer: 85489
			}
		},
	],

}

export default card
