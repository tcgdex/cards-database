import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		es: "Mienshao",
		it: "Mienshao",
		pt: "Mienshao",
		de: "Wie-Shu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		620,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
		de: "Lin-Fu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
				de: "Abschlag"
			},
			effect: {
				en: "Discard a random card from your opponent's hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
				de: "Nimm 1 zufällige Karte aus der verdeckten Hand deines Gegners und lege sie auf dessen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Whip",
				fr: "Double Fouet",
				de: "Doppelpeitsche"
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 70 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Using the long fur on its arms like whips, it launches into combo attacks that, once started, no one can stop.",
		de: "Niemand kann es aufhalten, wenn es eine Angriffsserie mit seinen peitschenartigen Armen startet."
	},

	thirdParty: {
		cardmarket: 280675,
		tcgplayer: 87442
	}
}

export default card
