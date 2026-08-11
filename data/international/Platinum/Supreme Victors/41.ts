import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Sableye G",
		'fr-fr': "Tenefix ",
		'de-de': "Zobiris G"
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [302],
	hp: 70,
	types: [
		"Darkness"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 10,
			cost: ["Darkness"]
		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Astonish",
				'fr-fr': "Étonnement",
				'de-de': "Erstauner"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
				'fr-fr': "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la, puis demandez à votre adversaire de la mélanger à son deck.",
				'de-de': "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die Karte an, danach mischt dein Gegner sie in sein Deck."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278732,
				tcgplayer: 88859
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278732,
				tcgplayer: 88859
			}
		},
	],

}

export default card
