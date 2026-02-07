import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Wide Solarbeam",
				fr: "« Grand rayon solaire »"
			},
			effect: {
				en: "Does 20 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Hard Plant",
				fr: "« Herbe forte »"
			},
			effect: {
				en: "Venusaur can’t use Hard Plant during your next turn.",
				fr: "Florizarre ne peut pas utiliser Herbe forte lors de votre prochain tour."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	retreat: 3,

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 277437,
		tcgplayer: 90317
	}
}

export default card
