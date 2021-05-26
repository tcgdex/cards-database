import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou"
	},
	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou"
	},



	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleep Pulse",
				fr: "Pouls Dodo"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Smash",
				fr: "Double Broiement"
			},
			effect: {
				en: "Flip 2 coins. This attack does 90 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face."
			},
			damage: "90×",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
