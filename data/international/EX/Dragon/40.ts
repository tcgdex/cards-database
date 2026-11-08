import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
		'de-de': "Seemon"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [117],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agilität"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Seadra during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaque, y compris les dégâts, infligés à Hypocéan.",
				'de-de': "Wirf 1 Münze. Verhindere bei 'Kopf' während des nächsten Zuges deines Gegners alle Effekte von Angriffen (einschließlich Schaden), die Seemon zugefügt werden."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
				'de-de': "Kaskade"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89013,
				cardmarket: 275917
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89013,
				cardmarket: 275917
			},
		},
	],

}

export default card
