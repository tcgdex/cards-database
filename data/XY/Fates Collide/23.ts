import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		689,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Binacle",
		fr: "Opermine",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hand Block",
				fr: "Blocage Manuel",
			},
			effect: {
				en: "If you have a Stadium card in play, your opponent can’t attach any Special Energy cards from his or her hand to his or her Pokémon.",
				fr: "Si vous avez une carte Stade en jeu, votre adversaire ne peut pas attacher de carte Énergie spéciale de sa main à ses Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch'Griffe",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
