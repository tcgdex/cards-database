import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Security Guard",
				fr: "Agent de Sécurité",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, all of your Pokémon take 30 less damage from your opponent's attacks (after applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, tous vos Pokémon subissent 30 dégâts de moins provenant des attaques de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
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

	retreat: 3,



}

export default card
