import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Torkoal",
		fr: "Chartor de Team Magma",
		de: "Team Magmas Qurtel"
	},

	illustrator: "K. Hoshiba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 80,

	types: [
		"Fire",
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Magma Burn",
				fr: "Brûlure de Magma",
				de: "Magma Burn"
			},
			effect: {
				en: "Discard the top card from your opponent's deck, and flip a coin. If tails, discard a Fire Energy attached to Team Magma's Torkoal.",
				fr: "Défaussez la première carte du deck de votre adversaire et lancez une pièce. Si c'est pile, défaussez une Énergie  attachée à Chartor de Team Magma.",
				de: "Discard the top card from your opponent's deck, and flip a coin. If tails, discard a  Energy attached to Team Magma's Torkoal."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Hot Air",
				fr: "Air chaud",
				de: "Hot Air"
			},
			effect: {
				en: "Discard a Fire Energy attached to Team Magma's Torkoal, and your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				fr: "Défaussez une Énergie  attachée à Chartor de Team Magma. Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc, s'il en a.",
				de: "Discard a  Energy attached to Team Magma's Torkoal, and your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 275989,
		tcgplayer: 89845
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
