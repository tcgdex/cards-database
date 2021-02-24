import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Chimecho",
		fr: "Éoko",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		358,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heal Bell",
				fr: "Glas de soin",
			},
			effect: {
				en: "Remove 3 damage counters from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 3 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Super Psywave",
				fr: "Super vague psy",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. Count the amount of Energy attached to that Pokémon. Put that many damage counters on the Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Comptabilisez le nombre d'Énergies attachées à ce Pokémon. Placez autant de marqueurs de dégât sur ce Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
