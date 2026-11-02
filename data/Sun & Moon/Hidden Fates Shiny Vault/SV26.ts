import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Guzzlord",
		fr: "Engloutyran",
		de: "Schlingking"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		799,
	],
	hp: 160,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Lord's Valley",
				fr: "Vallée du Tyran",
				de: "Tal des Königs"
			},
			effect: {
				en: "If you have exactly 2, 4, or 6 Prize cards remaining, discard the top 10 cards of your deck.",
				fr: "S’il vous reste exactement 2, 4 ou 6 cartes Récompense, défaussez les 10 cartes du dessus de votre deck.",
				de: "Wenn du genau 2, 4 oder 6 verbleibende Preiskarten hast, lege die obersten 10 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,




	description: {
		en: "A dangerous Ultra Beast, it appears to be eating constantly, but for some reason its droppings have never been found.",
		de: "Eine gefährliche Ultrabestie, die ununterbrochen mit Fressen beschäftigt zu sein scheint. Es wurden jedoch nie Exkremente gefunden."
	},
}

export default card
