import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Toxapex",
		fr: "Prédastérie",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		748,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Toxic Spikes",
				fr: "Pics Toxik",
			},
			effect: {
				en: "Whenever your opponent's Active Pokémon retreats, their new Active Pokémon is Poisoned.",
				fr: "Lorsque le Pokémon Actif de votre adversaire bat en retraite, son nouveau Pokémon Actif est Empoisonné.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venoshock",
				fr: "Choc Venin",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts supplémentaires.",
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

	retreat: 3,



}

export default card
