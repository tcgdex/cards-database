import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Musharna",
		fr: "Mushana",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		518,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rest Well",
				fr: "Siesta",
			},
			effect: {
				en: "Both Active Pokémon are now Asleep. During your next turn, this Pokémon's attacks do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les deux Pokémon Actifs sont maintenant Endormis. Pendant votre prochain tour, les attaques de ce Pokémon infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Zen Headbutt",
				fr: "Psykoud’Boul",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
