import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Brasegali",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fire Dance",
				fr: "Danse du feu",
			},
			effect: {
				en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie Fire et attachez-la à 1 de vos Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flame Kick",
				fr: "Coup enflammé",
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Blaziken. This attack does 80 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Fire attachées à Brasegali. Cette attaque inflige 80 dégâts à 1 des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	retreat: 1,



}

export default card
