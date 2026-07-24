import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Typhlosion",
		de: "Tornupto"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [100],

	hp: 50,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Thundershock",
				fr: "Rafale thermique",
				de: "Wärmewelle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire, s'il en possède. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu, falls vorhanden. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90101,
				cardmarket: 274903
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
