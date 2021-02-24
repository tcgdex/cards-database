import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Torterra",
		fr: "Torterra",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		389,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
			},
			effect: {
				en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frenzy Plant",
				fr: "Vege-Attak",
			},
			effect: {
				en: "Torterra can't use Frenzy Plant during your next turn.",
				fr: "Torterra ne peut pas utiliser Vege-Attak lors de votre prochain tour.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 4,



}

export default card
