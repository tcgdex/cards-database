import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
	},

	illustrator: "TOKIYA",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 120,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe Acier",
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Time Freeze",
				fr: "Gel Temporel"
			},
			effect: {
				en: "Your opponent can't play any Pokémon from his or her hand to evolve the Defending Pokémon during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer le Pokémon Défenseur pendant son prochain tour."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 289800
	}
}

export default card
