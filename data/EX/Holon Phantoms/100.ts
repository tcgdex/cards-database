import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mew ex",
		fr: "Mew ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 90,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psychic Vision",
				fr: "Vision psy"
			},
			effect: {
				en: "Once during your turn (before your attack), if Mew ex is on your Bench, you may look at your opponent's hand.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Mew ex est sur votre Banc, vous pouvez regarder la main de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super psy"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Devo Crush",
				fr: "Devo broyage"
			},
			effect: {
				en: "You may discard 2 Energy attached to Mew ex. If you do, you may remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
				fr: "Vous pouvez défausser 2 Énergies attachées à Mew ex. Vous pouvez alors retirer au Pokémon Défenseur la carte Évolution au niveau le plus élevé et la mélanger au deck de votre adversaire."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
