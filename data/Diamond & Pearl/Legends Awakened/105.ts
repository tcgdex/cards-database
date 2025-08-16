import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Lileep",
		fr: "Lilia",
		de: "Liliep"
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
		en: "Root Fossil",
		fr: "Wurzelfossil",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Astonish",
				fr: "Étonnement",
				de: "Erstauner"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Choisissez sans regarder une carte de la main de votre adversaire. Regardez-la et demandez à votre adversaire de la mélanger à son deck.",
				de: "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die Karte an, danach mischt dein Gegner sie in sein Deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Absorb",
				fr: "Vol-vie",
				de: "Absorber"
			},
			effect: {
				en: "Remove 2 damage counters from Lileep.",
				fr: "Retirez à Lilia 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von Liliep."
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
		fr: "Il vivait au fond de la mer il y a 100 millions d'années. La science a permis de le ressusciter."
	},

	thirdParty: {
		cardmarket: 278254,
		tcgplayer: 86789
	}
}

export default card
