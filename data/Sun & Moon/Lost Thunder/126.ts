import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette",
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Special Blow",
				fr: "Coup Spécial",
			},
			effect: {
				en: "If your opponent's Active Pokémon has any Special Energy attached to it, this attack does 70 more damage.",
				fr: "Si de l’Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
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
	retreat: 1,



}

export default card
