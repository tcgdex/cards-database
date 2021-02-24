import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},
	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		668,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Swirling Inferno",
				fr: "Torsade Infernale",
			},
			effect: {
				en: "Discard all Pokémon Tool cards and Special Energy from each of your opponent's Pokémon.",
				fr: "Défaussez toutes les cartes Outil Pokémon et l’Énergie spéciale de chacun des Pokémon de votre adversaire.",
			},
			damage: 70,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
			},

			damage: 140,

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
