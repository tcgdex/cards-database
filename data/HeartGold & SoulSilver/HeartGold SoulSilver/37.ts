import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Corsola",
		fr: "Corayon",
		de: "Corasonn"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		222,
	],

	hp: 60,

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
				en: "Recover",
				fr: "Soin",
				de: "Genesung"
			},
			effect: {
				en: "Discard a Water Energy attached to Corsola and remove all damage counters from Corsola.",
				fr: "Défaussez une carte Énergie Water attachée à Corayon et retirez tous les marqueurs de dégâts sur Corayon.",
				de: "Lege 1 an Corasonn angelegte -Energie auf deinen Ablagestapel und entferne alle Schadensmarken von Corasonn."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hyper Cannon",
				fr: "Hyper canon",
				de: "Hyperkanone"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, this attack does 20 damage plus 50 more damage.",
				fr: "Lancez 2 pièces. Si les deux pièces tombent sur face, cette attaque inflige 20 dégâts plus 50 dégâts supplémentaires.",
				de: "Wirf 2 Münzen. Wenn beide \"Kopf\" zeigen, fügt dieser Angriff 20 Schadenspunkte plus 50 weitere Schadenspunkte zu."
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
		en: "It continuously sheds and grows. The tip of its head is prized as a treasure because of its beauty."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp : ["snow-flake"],
			languages: ["de"]
		},
	],

	thirdParty: {
		cardmarket: 279009,
		tcgplayer: 84443
	}
}

export default card
