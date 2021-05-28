import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Turbo Assault",
				fr: "Assaut Turbo",
			},
			effect: {
				en: "Attach an Energy card from your discard pile to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à l'un de vos Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bite Off",
				fr: "Arrachage",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
