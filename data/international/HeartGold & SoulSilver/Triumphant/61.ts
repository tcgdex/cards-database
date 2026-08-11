import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'de-de': "Digda"
	},

	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [50],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sand Veil",
				'fr-fr': "Voile Sable",
				'de-de': "Sandschleicher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Diglett during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, prévenez tous les effets d’attaques (y compris les dégâts) infligés à Taupiqueur pendant le prochain tour de votre adversaire.",
				'de-de': "Wirf eine Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Digda zugefügt werden."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Mini Earthquake",
				'fr-fr': "Mini séisme",
				'de-de': "Mini-Erdbeben"
			},
			effect: {
				'en-us': "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
		'en-us': "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84826,
				cardmarket: 279591
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279591,
				tcgplayer: 84826
			}
		},
	],

}

export default card
