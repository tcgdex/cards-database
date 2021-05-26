import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Armaldo",
		fr: "Armaldo",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		348,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Anorith",
		fr: "Anorith",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ancient Blast",
				fr: "Explosion Ancestrale",
			},
			effect: {
				en: "This attack does 50 more damage for each Unidentified Fossil card in your discard pile.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Fossile Inconnu dans votre pile de défausse.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Claw",
				fr: "Instagriffe",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
