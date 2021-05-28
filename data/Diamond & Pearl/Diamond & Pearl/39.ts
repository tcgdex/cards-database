import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		416,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Honey",
				fr: "Feuille miel",
			},
			effect: {
				en: "Discard a Grass Energy attached to Vespiquen and remove all damage counters from 1 of your Benched Grass Pokémon.",
				fr: "Défaussez une Énergie Grass attachée à Apireine  et retirez à 1 de vos Pokémon de Banc Grass tous ses marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Attack Order",
				fr: "Appel Attak",
			},
			effect: {
				en: "Does 10 damage times the number of Grass Pokémon in play (both yours and your opponent's).",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon Grass en jeu (les vôtres et ceux de votre adversaire).",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
