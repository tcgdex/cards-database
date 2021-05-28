import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Sirfetch’d",
		fr: "Palarticho de Galar"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Galarian Farfetch’d",
		fr: "Canarticho de Galar"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Meteor Assault",
				fr: "Joute Astrale"
			},
			effect: {
				en: "This Pokémon can’t use Meteor Assault again until it leaves the Active Spot.",
				fr: "Ce Pokémon ne peut pas réutiliser Joute Astrale tant qu’il ne quitte pas le Poste Actif."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
