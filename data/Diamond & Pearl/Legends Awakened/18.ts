import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Armaldo",
		fr: "Armaldo",
	},
	illustrator: "Kazuaki Aihara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		348,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Anorith",
		fr: "Anorith",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fossil Armor",
				fr: "Armure fossile",
			},
			effect: {
				en: "If Armaldo would be damaged by an attack, prevent that attack's damage done to Armaldo if that damage is 60 or less.",
				fr: "Si une attaque inflige des dégâts à Armaldo, prévenez les dégâts de cette attaque si ces dégâts sont de 60 ou moins.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crush Claw",
				fr: "Éclategriffe",
			},
			effect: {
				en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage.",
				fr: "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
