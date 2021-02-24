import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Boldore",
		fr: "Géolithe",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		525,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Roggenrola",
		fr: "Nodulithe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Core Heal",
				fr: "Soin Viscéral",
			},
			effect: {
				en: "Discard a Fighting Energy attached to this Pokémon and heal 50 damage from it.",
				fr: "Défaussez une Énergie Fighting attachée à ce Pokémon et soignez 50 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Power Gem",
				fr: "Rayon Gemme",
			},

			damage: 60,

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
