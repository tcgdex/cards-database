import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		67,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Knuckle Down",
				fr: "Poing de chute",
			},
			effect: {
				en: "This attack's damage isn't affected by Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par les Poké-Powers, les Poké-Bodies ou tout autre effet en action sur le Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Strength",
				fr: "Force",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
