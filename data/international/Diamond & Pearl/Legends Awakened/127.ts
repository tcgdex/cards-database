import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
		'de-de': "Ultrigaria"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		70,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bellsprout",
		'fr-fr': "Knofensa",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre Toxik",
				'de-de': "Giftpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Rasierblatt"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A Pokémon that appears to be a plant. It captures unwary prey by dousing them with a toxic powder.",
	},

	thirdParty: {
		cardmarket: 278276,
		tcgplayer: 90554
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
