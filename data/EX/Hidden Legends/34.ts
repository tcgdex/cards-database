import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Glalie",
		fr: "Oniglali",
		de: "Firnontor"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Ice Wall",
				fr: "Mur de glace",
				de: "Ice Wall"
			},
			effect: {
				en: "Any damage done to Glalie by attacks from your opponent's Pokémon with any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à Oniglali par des attaques de Pokémon de votre adversaire possédant des Énergies Spéciales sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				de: "Any damage done to Glalie by attacks from your opponent's Pokémon with any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Blizzard",
				fr: "Gros blizzard",
				de: "Heavy Blizzard"
			},
			effect: {
				en: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est face, placez 1 marqueur de dégât sur chacun des Pokémon de Banc de votre adversaire.",
				de: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276108,
		tcgplayer: 85752
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
