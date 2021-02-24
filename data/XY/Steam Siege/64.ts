import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		625,
	],
	hp: 100,
	types: [
		"Darkness",
		"Metal",
	],
	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retaliate",
				fr: "Vengeance",
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 60 more damage.",
				fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
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
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
