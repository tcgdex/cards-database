import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Leavanny",
		fr: "Manternel",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		542,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blanket Weaver",
				fr: "Tisserand de Couvertures",
			},
			effect: {
				en: "Your Grass Pokémon take 40 less damage from your opponent's attacks (after applying Weakness and Resistance). You can't apply more than 1 Blanket Weaver Ability at a time.",
				fr: "Vos Pokémon Grass subissent 40 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Tisserand de Couvertures à la fois.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch’Herbe",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
