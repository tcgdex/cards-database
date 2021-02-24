import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Chesnaught",
		fr: "Blindépique",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		652,
	],
	hp: 160,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Quilladin",
		fr: "Boguérisse",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spike Lariat",
				fr: "Lasso à Piques",
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
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
				en: "Adamantine Press",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
