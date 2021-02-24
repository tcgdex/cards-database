import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Incineroar",
		fr: "Félinferno",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		727,
	],
	hp: 160,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Strong Cheer",
				fr: "Acclamation Forte",
			},
			effect: {
				en: "Your Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You can't apply more than 1 Strong Cheer Ability at a time.",
				fr: "Les attaques de vos Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Acclamation Forte à la fois.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
