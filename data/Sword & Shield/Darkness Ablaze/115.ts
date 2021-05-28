import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Grimmsnarl VMAX",
		fr: "Angoliath VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 330,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Grimmsnarl V",
		fr: "Angoliath-V"
	},

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "G-Max Drill",
				fr: "Perceuse G-Max"
			},
			effect: {
				en: "This attack does 50 more damage for each extra Darkness Energy attached to this Pokémon (in addition to this attack’s cost). You can’t add more than 100 damage in this way.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie Darkness supplémentaire attachée à ce Pokémon (en plus du coût de cette attaque). Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon."
			},
			damage: "170+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
