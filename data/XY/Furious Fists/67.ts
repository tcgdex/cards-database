import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		560,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Machine Gun Headbutt",
				fr: "Mitraille-Tête",
			},
			effect: {
				en: "Flip 3 coins. This attack does 50 damage times the number of heads. This Pokémon is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
			},
			damage: 50,

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
	retreat: 2,



}

export default card
