import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Remoraid",
		fr: "Rémoraid",
		de: "Remoraid"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		223,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sharpshooting",
				fr: "Tir de précision",
				de: "Scharfschuss"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. N'appliquez ni la Faiblesse, ni la Résistance.",
				de: "Wirf eine Münze. Wähle bei 'Kopf' ein Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 20 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il sait particulièrement bien viser. L'eau qu'il projette peut frapper une proie en mouvement à plus de 100 mètres."
	},

	thirdParty: {
		cardmarket: 274636,
		tcgplayer: 88692
	}
}

export default card
