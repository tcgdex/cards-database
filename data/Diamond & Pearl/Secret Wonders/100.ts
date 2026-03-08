import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Delusion",
				fr: "Hallucination",
				de: "Wahnvorstellung"
			},
			effect: {
				en: "If Psyduck is Confused, draw 2 cards.",
				fr: "Si Psykokwak est Confus, piochez 2 cartes.",
				de: "Wenn Enton verwirrt ist, ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Migraine",
				fr: "Maud'krâne",
				de: "Migräne"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Psyduck is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, Psykokwak est maintenant Confus.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt. Bei \"Zahl\" ist Enton jetzt verwirrt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277853,
		tcgplayer: 88438
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
