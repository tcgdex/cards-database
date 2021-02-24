import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Mightyena",
		fr: "Grahyèna de la Team Aqua",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Team Aqua's Poochyena",
		fr: "Medhyèna de la Team Aqua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Teampact",
				fr: "Teampact",
			},
			effect: {
				en: "Flip a coin for each Team Aqua Pokémon you have in play. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Pokémon de la Team Aqua que vous avez en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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
