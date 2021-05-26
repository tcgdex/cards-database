import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Warming Up",
				fr: "Réchauffement"
			},
			effect: {
				en: "If this Pokémon has a Burning Scarf attached, it gets +100 HP.",
				fr: "Si un Bandana Brûlant est attaché à ce Pokémon, il reçoit +100 PV."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Mane",
				fr: "Crinière de Feu"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 130,
	types: ["Fire"]
}

export default card
