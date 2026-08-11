import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'de-de': "Altaria"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Synergy Effect",
				'fr-fr': "Effet synergie",
				'de-de': "Synergieeffekt"
			},
			effect: {
				'en-us': "If Drake's Stadium is in play, remove 1 damage counter from Altaria between turns.",
				'fr-fr': "Si Stade d'Aragon est en jeu, retirez à Altaria un marqueur de dégât entre deux tours.",
				'de-de': "Wenn Dragans Stadion im Spiel ist, entferne zwischen den Zügen 1 Schadensmarke von Altaria."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Surprise",
				'fr-fr': "Surprise",
				'de-de': "Überraschung"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				'fr-fr': "Choisissez sans regarder une carte de la main de votre adversaire. Regardez cette carte puis demandez à votre adversaire de la mélanger à son deck.",
				'de-de': "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die Karte an, danach mischt dein Gegner sie in sein Deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'de-de': "Windstoß"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277308,
		tcgplayer: 83515
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
