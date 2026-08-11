import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Air Crash",
				'fr-fr': "Crash Aérien",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wings of Destruction",
				'fr-fr': "Ailes de l'Annihilation",
			},
			effect: {
				'en-us': "If your opponent has Xerneas (including Xerneas-EX) in play, this attack does 40 more damage.",
				'fr-fr': "Si votre adversaire a Xerneas (y compris Xerneas-EX) en jeu, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "80＋",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "−20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When this legendary Pokémon's wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures.",
	},

	thirdParty: {
		cardmarket: 552959
	}
}

export default card
