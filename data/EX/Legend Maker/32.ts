import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Electrode",
		de: "Lektrobal"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
				de: "Superschall"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tumbling Attack",
				fr: "Attaque trébuchante",
				de: "Sturzflug"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276909,
		tcgplayer: 85155
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
