import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Tapu Bulu-GX",
		fr: "Tokotoro-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		787,
	],
	hp: 180,
	types: [
		"Grass",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud’Korne",
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Nature's Judgment",
				fr: "Jugement de la Nature",
			},
			effect: {
				en: "You may discard all Energy from this Pokémon. If you do, this attack does 60 more damage.",
				fr: "Vous pouvez défausser toute l’Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 120,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Tapu Wilderness-GX",
				fr: "Toko Nature-GX",
			},
			effect: {
				en: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 150,

		},
	],


	retreat: 3,



}

export default card
