import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Seedot",
		fr: "Grainipiot Niv. 8",
		de: "Samurzel"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		273,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Harden",
				fr: "Armure",
				de: "Härtner"
			},
			effect: {
				en: "During your opponent's next turn, if Seedot would be damaged by an attack, prevent that attack's damage done to Seedot if that damage is 40 or less.",
				fr: "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Grainipiot, prévenez ces dégâts s'ils sont de 40 ou moins.",
				de: "Wenn Samurzel während des nächsten Zuges deines Gegners durch einen Angriff 40 oder weniger Schadenspunkte zugefügt würden, verhindere diesen Schaden."
			},

		},
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
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la puis demandez à votre adversaire de la mélanger à son deck.",
				de: "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die Karte an, danach mischt dein Gegner sie in sein Deck."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
