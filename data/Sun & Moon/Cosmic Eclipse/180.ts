import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		695,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Parabolic Counter",
				fr: "Riposte Parabolique",
			},
			effect: {
				en: "If your opponent has any Lightning Pokémon in play, this attack does 90 more damage.",
				fr: "Si votre adversaire a au moins un Pokémon Lightning en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zap Kick",
				fr: "Coup de Pied Ravageur",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
