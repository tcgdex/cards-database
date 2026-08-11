import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Lileep",
		'fr-fr': "Lilia",
		'de-de': "Liliep"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		345,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Root Fossil",
		'fr-fr': "Wurzelfossil",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Astonish",
				'fr-fr': "Étonnement",
				'de-de': "Erstauner"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
				'fr-fr': "Choisissez sans regarder une carte de la main de votre adversaire. Regardez-la et demandez à votre adversaire de la mélanger à son deck.",
				'de-de': "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die Karte an, danach mischt dein Gegner sie in sein Deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Absorb",
				'fr-fr': "Vol-vie",
				'de-de': "Absorber"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Lileep.",
				'fr-fr': "Retirez à Lilia 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Liliep."
			},
			damage: 30,

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
		'en-us': "It lived on the seafloor 100 million years ago and was reanimated scientifically.",
		'fr-fr': "Il vivait au fond de la mer il y a 100 millions d'années. La science a permis de le ressusciter."
	},

	thirdParty: {
		cardmarket: 278254,
		tcgplayer: 86789
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
