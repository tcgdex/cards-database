import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking"
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 160,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
		fr: "Galegon"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sturdy",
				fr: "Fermeté"
			},
			effect: {
				en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
				fr: "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d’une attaque, il n’est pas mis K.O. et il lui reste 10 PV."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigaton Stomp",
				fr: "Écrasement Gigatonne"
			},

			damage: 160,

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
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 3,



}

export default card
