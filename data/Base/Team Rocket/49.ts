import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Abra",
		fr: "Abra",
		de: "Abra"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		63,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Vanish",
				fr: "Disparition",
				de: "Plötzlich verschwinden"
			},
			effect: {
				en: "Shuffle Abra into your deck. (Discard all cards attached to Abra.)",
				fr: "Mélangez Abra avec votre deck. (Défaussez toutes les cartes attachées à Abra.)",
				de: "Mische Abra in dein Deck. (Entferne alle Karten von Abra.)"
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psychique",
				de: "Psychoschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

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
		en: "It teleports itself away from danger, making it difficult to capture.",
		fr: "Il se téléporte hors du danger, rendant sa capture difficile.",
		de: "Es teleportiert sich aus gefährlichen Situationen, wodurch es sehr schwer einzufangen ist."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274102,
				tcgplayer: 83445
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274102,
				tcgplayer: 83445
			}
		}
	]
}

export default card
