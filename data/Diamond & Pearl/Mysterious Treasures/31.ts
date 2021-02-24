import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Nidoqueen",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		31,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidorina",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mother Pheromone",
			},
			effect: {
				en: "The attack cost of your Nidoran ♀, Nidorina, Nidoran ♂, Nidorino, and Nidoking's attack is Colorless less.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Give Aid",
			},
			effect: {
				en: "If you have the same number of or less Benched Pokémon than your opponent, this attack's base damage is 50 instead of 90.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],




}

export default card
