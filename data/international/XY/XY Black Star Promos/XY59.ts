import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Salamence",
		'fr-fr': "Drattak",
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Goons",
				'fr-fr': "Appel à la Rescousse"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Chercher jusqu'à 3 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Dracochoc"
			},
			effect: {
				'en-us': "Discard the top card of your deck.",
				'fr-fr': "Défaussez la carte du dessus de votre deck."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It's uncontrollable if enraged. It flies around spouting flames and scorching fields and mountains.",
	},

	thirdParty: {
		cardmarket: 289784
	}
}

export default card
