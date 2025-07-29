import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
		de: "Digda"
	},

	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sand Veil",
				fr: "Voile Sable",
				de: "Sandschleicher"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Diglett during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, prévenez tous les effets d’attaques (y compris les dégâts) infligés à Taupiqueur pendant le prochain tour de votre adversaire.",
				de: "Wirf eine Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Digda zugefügt werden."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mini Earthquake",
				fr: "Mini séisme",
				de: "Mini-Erdbeben"
			},
			effect: {
				en: "Does 10 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279591
	}
}

export default card
