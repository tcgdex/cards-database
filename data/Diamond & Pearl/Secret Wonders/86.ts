import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skélénox",
		de: "Zwirrlicht"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	item: {
		name: {
			fr: "Tissu Fauche",
			de: 'Düsterumhang'
		},
		effect: {
			fr: "Skélénox peut évoluer lors du tour où il est joué.",
			de: 'Zwirrlicht kann in dem Zug entwickelt werden, in dem du es gespielt hast.'
		}
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Astonish",
				fr: "Étonnement",
				de: 'Erstauner'
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Lancez une pièce. Si c'est face, choisissez sans regarder 1 carte de la main de votre adversaire. Regardez la carte et demandez à votre adversaire de la mélanger à son deck.",
				de: 'Wirf 1 Münze. Wähle bei „Kopf“ 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die Karte an, danach mischt dein Gegner sie in sein Deck. '
			},

		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277839
	}
}

export default card
