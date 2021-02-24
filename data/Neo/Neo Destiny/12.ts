import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Arcanine",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Drive Off",
			},
			effect: {
				en: "As long as Light Arcanine is your Active Pokémon, once during your turn (before your attack), if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power can't be used while Light Arcanine is Asleep, Confused, or Paralyzed.",
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
				en: "Gentle Flames",
			},
			effect: {
				en: "If the Defending Pokémon is a Baby Pokémon, this attack does 10 damage instead of 50. If the Defending Pokémon is a Basic Pokémon, this attack does 30 damage instead of 50.",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
