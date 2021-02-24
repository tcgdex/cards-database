import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		2,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Pollen",
				fr: "Pollen évolutif",
			},
			effect: {
				en: "Once during your turn, when you play Ivysaur from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent's Active Pokémon is now Asleep.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Herbizarre de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser ce pouvoir. Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
