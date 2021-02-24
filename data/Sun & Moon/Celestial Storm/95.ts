import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Métalosse",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 170,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Extend",
				fr: "Prolongement",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your turn does not end when you play Steven's Resolve.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre tour ne se termine pas lorsque vous jouez Résolution de Pierre.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Meteor Mash",
				fr: "Poing Météore",
			},
			effect: {
				en: "During your next turn, this Pokémon's Meteor Mash attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Poing Météore de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
