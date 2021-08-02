import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		601,
	],
	hp: 140,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Klang",
		fr: "Clic",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heavy Bumper",
				fr: "Pare-Chocs Imposant",
			},
			effect: {
				en: "Any damage done to this Pokémon by an opponent’s attack is reduced by 10 for each Colorless in your opponent’s Active Pokémon’s Retreat Cost (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par une attaque de votre adversaire sont réduits de 10 pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Gear Spinner",
				fr: "Tourne Rouage",
			},
			effect: {
				en: "During your next turn, this Pokémon’s Gear Spinner attack does 70 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Tourne Rouage de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 70,

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
	retreat: 3,



}

export default card
