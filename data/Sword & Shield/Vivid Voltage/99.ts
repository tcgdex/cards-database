import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Coalossal VMAX",
		fr: "Monthracite VMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 330,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Coalossal V",
		fr: "Monthracite-V"
	},



	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Eruption Shot",
				fr: "Tir Éruptif"
			},
			effect: {
				en: "Discard the top card of your deck. If that card is an Energy card, this attack does 90 more damage, and attach that card to this Pokémon.",
				fr: "Défaussez la carte du dessus de votre deck. Si cette carte est une Énergie, cette attaque inflige 90 dégâts supplémentaires et vous attachez cette carte-là à ce Pokémon."
			},
			damage: "40+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "G-Max Boulder",
				fr: "Rocher G-Max"
			},

			damage: 240,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
