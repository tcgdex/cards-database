import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		617,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recover",
				fr: "Soin",
			},
			effect: {
				en: "Discard an Energy from this Pokémon and heal all damage from it.",
				fr: "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Speed Attack",
				fr: "Attaque Rapide",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
