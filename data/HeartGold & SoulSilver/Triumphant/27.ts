import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Top Burner",
				fr: "Super pyro",
			},
			effect: {
				en: "For each Fire Energy attached to Magmortar, discard the top card from your opponent’s deck. Then, flip a coin. If tails, discard all Fire Energy attached to Magmortar.",
				fr: "Pour chaque carte Énergie Fire attachée à Maganon, défaussez la carte du dessus du deck de votre adversaire. Lancez ensuite une pièce. Si c’est pile, défaussez toutes les cartes Énergie Fire attachées à Maganon.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burst Punch",
				fr: "Poing d’enfer",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
