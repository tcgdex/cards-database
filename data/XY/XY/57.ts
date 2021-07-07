import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		711,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Eerie Voice",
				fr: "Voix Lugubre",
			},
			effect: {
				en: "Put 2 damage counters on each of your opponent’s Pokémon.",
				fr: "Placez 2 marqueurs de dégâts sur chaque Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Spirit Scream",
				fr: "Cri de l'Âme",
			},
			effect: {
				en: "Put damage counters on both Active Pokémon until the remaining HP of each Pokémon is 10.",
				fr: "Placez des marqueurs de dégâts sur les deux Pokémon Actifs jusqu'à ce que chaque Pokémon ait 10 PV.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
