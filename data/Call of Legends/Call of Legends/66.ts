import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Phanpy",
		fr: "Phanpy",
		de: "Phanpy"
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
				en: "Ultra-Thick Skin",
				fr: "Peau ultra-épaisse",
				de: "Ultradicke Haut"
			},
			effect: {
				en: "As long as Phanpy has Energy attached to it, any damage done to Phanpy by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tant que Phanpy possède au moins une Énergie, les dégâts infligés à Phanpy par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Solange mindestens 1 Energie an Phanpy angelegt ist, wird Schaden, der Phanpy durch Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Rock Smash",
				fr: "Éclate-roc",
				de: "Zertrümmerer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
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
		en: "As a sign of affection, it bumps with its snout. However, it is so strong, it may send you flying.",
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
	],

}

export default card
