import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'de-de': "Phanpy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [231],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Ultra-Thick Skin",
				'fr-fr': "Peau ultra-épaisse",
				'de-de': "Ultradicke Haut"
			},
			effect: {
				'en-us': "As long as Phanpy has Energy attached to it, any damage done to Phanpy by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tant que Phanpy possède au moins une Énergie, les dégâts infligés à Phanpy par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Solange mindestens 1 Energie an Phanpy angelegt ist, wird Schaden, der Phanpy durch Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-roc",
				'de-de': "Zertrümmerer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "As a sign of affection, it bumps with its snout. However, it is so strong, it may send you flying.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88004,
				cardmarket: 279709
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88004,
				cardmarket: 279709
			},
		},
		{
			type: "normal",
			subtype: 'phanphy-error'
		},
		{
			type: "reverse",
			subtype: 'phanphy-error'
		},
	],

}

export default card
