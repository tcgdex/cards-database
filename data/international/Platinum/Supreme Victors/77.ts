import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Takao Unno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [26],

	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Gigashock",
				'fr-fr': "Électrochok",
				'de-de': "Gigaschock"
			},
			effect: {
				'en-us': "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	description: {
		'en-us': "Its tail discharges electricity into the ground, protecting it from getting shocked."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88515,
				cardmarket: 278768
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278768,
				tcgplayer: 88515
			}
		},
	],

}

export default card
