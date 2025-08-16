import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Weepinbell",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		70,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bellsprout",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Drool",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Flytrap",
			},
			effect: {
				en: "Before doing damage, choose 1 of your opponent's Benched Pokémon and switch it with his or her Active Pokémon. This attack can't be used if your opponent has no Benched Pokémon.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274184,
		tcgplayer: 85310
	}
}

export default card
