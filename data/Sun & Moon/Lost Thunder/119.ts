import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Alolan Persian",
		fr: "Persian d’Alola",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Empty Threat",
				fr: "Menace en l’Air",
			},
			effect: {
				en: "This attack does 30 less damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts de moins multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
