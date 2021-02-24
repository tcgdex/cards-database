import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Medicham",
		fr: "Charmina",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		308,
	],
	hp: 110,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Pure Power",
				fr: "Force Pure",
			},
			effect: {
				en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Master Strike",
				fr: "Coup de Maître",
			},
			effect: {
				en: "If this Pokémon has a Karate Belt card attached to it, this attack does 60 more damage.",
				fr: "Si une carte Ceinture de Karaté est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
