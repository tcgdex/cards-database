import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Carracosta",
		fr: "Mégapagos",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		565,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Rock",
				fr: "Solide Roc",
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, reduce that damage by 50 (after applying Weakness and Resistance).",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, les dégâts sont réduits de 50 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Discard an Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
