import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		778,
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
				en: "Impersonation",
				fr: "Usurpation",
			},
			effect: {
				en: "Discard a Supporter card from your hand. If you do, use the effect of that card as the effect of this attack.",
				fr: "Défaussez une carte Supporter de votre main. Dans ce cas, utilisez l’effet de cette carte en tant qu’effet de cette attaque.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Mischievous Hands",
				fr: "Mains Malicieuses",
			},
			effect: {
				en: "Choose 2 of your opponent's Pokémon and put 2 damage counters on each of them.",
				fr: "Choisissez 2 des Pokémon de votre adversaire et placez 2 marqueurs de dégâts sur chacun d’eux.",
			},

		},
	],


	retreat: 1,



}

export default card
