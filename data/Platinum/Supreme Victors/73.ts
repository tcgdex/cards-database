import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Ninjask",
		fr: "Ninjask",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		291,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Circling Dive",
				fr: "Plongeon en cercle",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Switch Ninjask with 1 of your Benched Pokémon.",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Échangez Ninjask avec 1 des Pokémon de votre Banc.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Parallel Drain",
				fr: "Tuyau parallèle",
			},
			effect: {
				en: "Remove from 1 of your Pokémon the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Retirez à 1 de vos Pokémon autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
