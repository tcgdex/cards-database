import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		419,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rescue",
				fr: "Rescousse",
			},
			effect: {
				en: "Shuffle 3 Pokémon from your discard pile into your deck.",
				fr: "Mélangez 3 Pokémon de votre pile de défausse avec votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Screw Tail",
				fr: "Queue Cloutée",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent’s Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
