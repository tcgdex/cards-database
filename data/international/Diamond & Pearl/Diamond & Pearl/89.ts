import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Meditite",
		'fr-fr': "Meditikka",
		'de-de': "Meditie"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		307,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Detect",
				'fr-fr': "Détection",
				'de-de': "Scanner"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Meditite during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Meditikka lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Verhindere bei 'Kopf' während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Meditie zugefügt werden."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Meditate",
				'fr-fr': "Yoga",
				'de-de': "Meditation"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It eats just one berry a day. By enduring hunger, its spirit is tempered and made sharper.",
		'fr-fr': "Il ne mange qu'une Baie par jour. La faim lui a forgé une volonté de fer."
	},

	thirdParty: {
		cardmarket: 277588,
		tcgplayer: 87284
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
