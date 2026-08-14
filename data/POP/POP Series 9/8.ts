import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Gabite",
		fr: "Gabite",
		de: "Knarksel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [444],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
		de: "Kaumalat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Burrow",
				fr: "Terrier",
				de: "Erdhöhle"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Gabite by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carmache par des attaques lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei „Kopf“ verhindere allen Schaden, der Knarksel während des nächsten Zuges deines Gegners durch Angriffe zugefügt würde."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Distored Wave",
				fr: "Vague tordue",
				de: "Verzerrte Welle"
			},
			effect: {
				en: "Before doing damage, remove 2 damage counters from the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, retirez au Pokémon Défenseur 2 marqueurs de dégât.",
				de: "Bevor der Schaden zugefügt wird, entferne 2 Schadensmarken vom Verteidigenden Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		en: "It habitually digs up and hoards gems in its nest. Its loot is constantly targeted by thieves.",
		de: "Es gräbt Edelsteine aus und hortet sie in seinem Nest. Daher ist dieses ein beliebtes Ziel mancher Diebe."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85598,
				cardmarket: 278559
			},
		},
	],

}

export default card
