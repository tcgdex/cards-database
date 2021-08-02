import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		36,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Follow Me",
				fr: "Par Ici",
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with your opponent’s Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec le Pokémon Actif de votre adversaire.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Moonblast",
				fr: "Pouvoir Lunaire",
			},
			effect: {
				en: "During your opponent’s next turn, any damage done by attacks from the Defending Pokémon is reduced by 30 (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 30 (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
