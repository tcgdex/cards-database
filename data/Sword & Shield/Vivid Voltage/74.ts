import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Swoobat",
		fr: "Rhinolove"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Woobat",
		fr: "Chovsourir"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unaware",
				fr: "Inconscient"
			},
			effect: {
				en: "Prevent all effects of attacks from your opponent’s Pokémon done to this Pokémon. (Damage is not an effect.)",
				fr: "Évitez tous les effets d’attaques infligés à ce Pokémon par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Heart Stamp",
				fr: "Crève-Cœur"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
