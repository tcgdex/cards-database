import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Tyrantrum",
		fr: "Rexillius",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		697,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Tyrunt",
		fr: "Ptyranidur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chew Up",
				fr: "Mâchoires Affamées",
			},
			effect: {
				en: "If your opponent's Active Pokémon has any Special Energy attached to it, this attack does 90 more damage.",
				fr: "Si de l'Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
