import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Boldore",
		fr: "Géolithe",
	},
	illustrator: "Kouki Saitou",
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
				"Colorless",
			],
			name: {
				en: "Smack Down",
				fr: "Anti-Air",
			},
			effect: {
				en: "If the Defending Pokémon has Fighting Resistance, this attack does 60 more damage.",
				fr: "Si le Pokémon Défenseur a une Résistance à Fighting, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Gem",
				fr: "Rayon Gemme",
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

	retreat: 3,



}

export default card
