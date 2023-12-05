import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Swablu",
		fr: "Tylton",
		de: "Wablu"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		333,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Roost",
				fr: "Atterrissage",
				de: "Roost"
			},
			effect: {
				en: "Remove 4 damage counters from Swablu. Swablu can't retreat during your next turn.",
				fr: "Retirez à Tylton 4 marqueurs de dégât. Tylton ne peut pas battre en retraite lors de votre prochain tour.",
				de: "Remove 4 damage counters from Swablu. Swablu can't retreat during your next turn."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mirror Move",
				fr: "Mimique",
				de: "Mirror Move"
			},
			effect: {
				en: "If Swablu was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Swablu to the Defending Pokémon.",
				fr: "Si une attaque a infligé des dégâts à Tylton lors du tour précédent de votre adversaire, cette attaque inflige le même nombre de dégâts au Pokémon Défenseur.",
				de: "If Swablu was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Swablu to the Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
				de: "Fury Attack"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Flip 3 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
