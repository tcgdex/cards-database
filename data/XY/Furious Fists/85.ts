import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Watchog",
		fr: "Miradar",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		505,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Held-Item Inspection",
				fr: "Inspection des Bagages",
			},
			effect: {
				en: "Your opponent reveals his or her hand. Choose an Item card you find there. Your opponent shuffles that card into his or her deck.",
				fr: "Votre adversaire montre sa main. Choisissez une carte Objet que vous y trouvez. Votre adversaire mélange la carte choisie avec son deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thorough Crunch",
				fr: "Mâchouille Impitoyable",
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
