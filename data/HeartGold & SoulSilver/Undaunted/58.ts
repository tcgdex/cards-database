import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Murkrow",
		fr: "Cornebre",
		de: "Kramurx"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		198,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Astonish",
				fr: "Étonnement",
				de: "Erstauner"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 card from your opponent’s hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Lancez une pièce. Si c’est face, choisissez au hasard une carte dans la main de votre adversaire. Regardez la carte que vous avez choisie, puis demandez à votre adversaire de la mélanger avec son deck.",
				de: "Wirf eine Münze. Wähle bei \"Kopf\" 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Sieh dir die gewählte Karte an und gib sie deinem Gegner. Er mischt die Karte zurück in sein Deck."
			},
			damage: 10,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Feared and loathed by many, it is believed to bring misfortune to all those who see it at night."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279311,
		tcgplayer: 87655
	}
}

export default card
