import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'de-de': "Kappalores"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rain Dish",
				'fr-fr': "Cuvette",
				'de-de': "Rain Dish"
			},
			effect: {
				'en-us': "At any time between turns, remove 1 damage counter from Ludicolo.",
				'fr-fr': "N'importe quand entre deux tours, retirez à Ludicolo 1 marqueur de dégât.",
				'de-de': "At any time between turns, remove 1 damage counter from Ludicolo."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Nature Power",
				'fr-fr': "Force-nature",
				'de-de': "Nature Power"
			},
			effect: {
				'en-us': "If you have a Stadium card in play, this attack does 60 damage plus 20 more damage. If your opponent has a Stadium card in play, the Defending Pokémon is now Confused.",
				'fr-fr': "Si vous avez une carte Stade en jeu, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires. Si votre adversaire possède une carte Stade en jeu, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "If you have a Stadium card in play, this attack does 60 damage plus 20 more damage. If your opponent has a Stadium card in play, the Defending Pokémon is now Confused."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If it hears festive music, all its muscles fill with energy. It can't help breaking out into a dance.",
	},

	thirdParty: {
		cardmarket: 277766,
		tcgplayer: 86899
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
