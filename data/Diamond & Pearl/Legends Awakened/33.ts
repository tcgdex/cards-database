import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Lopunny",
		fr: "Lockpin",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		428,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Buneary",
		fr: "Haspiror",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Healing Tail",
				fr: "Queue guérisseuse",
			},
			effect: {
				en: "As long as Lopunny is your Active Pokémon, remove 1 damage counter from each of your Benched Pokémon between turns.",
				fr: "Tant que Lockpin est votre Pokémon Actif, retirez à chacun de vos Pokémon de Banc 1 marqueur de dégât entre deux tours.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Collect",
				fr: "Collectionner",
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe transversale",
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
