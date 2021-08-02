import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Machamp EX",
		fr: "Mackogneur-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 180,
	types: [
		"Fighting",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Steaming Mad",
				fr: "Fou Furax",
			},
			effect: {
				en: "This attack does 20 damage times the number of damage counters on this Pokémon. This Pokémon is now Confused.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon. Ce Pokémon est maintenant Confus.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crazy Hammer",
				fr: "Marteau Fou",
			},
			effect: {
				en: "If this Pokémon is affected by a Special Condition, this attack does 80 more damage. Then, remove all Special Conditions from this Pokémon.",
				fr: "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 80 dégâts supplémentaires. Ensuite, retirez tous les États Spéciaux de ce Pokémon.",
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
