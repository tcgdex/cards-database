import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Bellsprout",
		fr: "Chétiflor",
		es: "Bellsprout",
		it: "Bellsprout",
		pt: "Bellsprout",
		de: "Knofensa"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		69,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
				es: "Látigo Cepa",
				it: "Frustata",
				pt: "Chicote de Vinha",
				de: "Rankenhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
				es: "Desarme",
				it: "Privazione",
				pt: "Derrubar",
				de: "Abschlag"
			},
			effect: {
				en: "Discard a random card from your opponent's hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
				es: "Descarta 1 carta aleatoria de la mano de tu rival.",
				it: "Scarta una carta a caso dalla mano del tuo avversario.",
				pt: "Descarte um card aleatório da mão de seu oponente.",
				de: "Nimm 1 zufällige Karte aus der verdeckten Hand deines Gegners und lege sie auf dessen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281665
	}
}

export default card
