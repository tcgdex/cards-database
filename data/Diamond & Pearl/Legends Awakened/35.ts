import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		62,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
		fr: "Quaputzi",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Focus Punch",
				fr: "Mitra-poing",
			},
			effect: {
				en: "If Poliwrath was damaged by an attack during your opponent's last turn, this attack does nothing.",
				fr: "Si une attaque a infligé des dégâts à Tartard lors du dernier tour de votre adversaire, cette attaque est sans effet.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Submission",
				fr: "Sacrifice",
			},
			effect: {
				en: "Poliwrath does 20 damage to itself.",
				fr: "Tartard s'inflige 20 dégâts.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
