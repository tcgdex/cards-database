import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Froslass",
		fr: "Momartik",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		478,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Spiteful Sigh",
				fr: "Souffle Rancunier",
			},
			effect: {
				en: "Put up to 7 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way.",
				fr: "Placez jusqu’à 7 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé de cette façon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
