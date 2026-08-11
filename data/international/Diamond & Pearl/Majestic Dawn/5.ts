import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali",
		'de-de': "Glaziola"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Snow Cloak",
				'fr-fr': "Rideau Neige",
				'de-de': "Schneemantel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Glaceon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Givrali lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Glaziola zugefügt würden."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Slide",
				'fr-fr': "Glissade rapide",
				'de-de': "Temporutscher"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigendem Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As a protective technique, it can completely freeze its fur to make its hairs stand like needles.",
	},

	thirdParty: {
		cardmarket: 278054,
		tcgplayer: 85744
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
