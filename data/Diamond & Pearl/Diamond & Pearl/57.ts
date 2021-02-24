import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		274,
	],
	hp: 80,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Dirty Trick",
				fr: "Coup en douce",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to 1 of your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à 1 des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Razor Wind",
				fr: "Coupe-vent",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
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
