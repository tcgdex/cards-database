import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Corsola",
		'fr-fr': "Corayon",
		'de-de': "Corasonn"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [222],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'de-de': "Genesung"
			},
			effect: {
				'en-us': "Discard a Water Energy attached to Corsola and remove all damage counters from Corsola.",
				'fr-fr': "Défaussez une carte Énergie Water attachée à Corayon et retirez tous les marqueurs de dégâts sur Corayon.",
				'de-de': "Lege 1 an Corasonn angelegte -Energie auf deinen Ablagestapel und entferne alle Schadensmarken von Corasonn."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Cannon",
				'fr-fr': "Hyper canon",
				'de-de': "Hyperkanone"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, this attack does 20 damage plus 50 more damage.",
				'fr-fr': "Lancez 2 pièces. Si les deux pièces tombent sur face, cette attaque inflige 20 dégâts plus 50 dégâts supplémentaires.",
				'de-de': "Wirf 2 Münzen. Wenn beide \"Kopf\" zeigen, fügt dieser Angriff 20 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It continuously sheds and grows. The tip of its head is prized as a treasure because of its beauty."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84443,
				cardmarket: 279009
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84443,
				cardmarket: 279009
			}
		},
	],

}

export default card
