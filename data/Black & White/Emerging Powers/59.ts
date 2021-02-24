import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Sawk",
		fr: "Karaclée",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		539,
	],
	hp: 90,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Five Fierce Chops",
				fr: "Volée de Coups",
			},
			effect: {
				en: "Flip 5 coins. This attack does 20 damage times the number of heads. This Pokémon can't attack during your next turn.",
				fr: "Lancez 5 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
