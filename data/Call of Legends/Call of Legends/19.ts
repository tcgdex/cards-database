import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Palkia",
		fr: "Palkia",
	},
	illustrator: "Daisuke Iwamoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		484,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Wormhole",
				fr: "Trou de ver",
			},
			effect: {
				en: "Switch Palkia with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Échangez Palkia avec l’un des Pokémon de votre Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec l’un de ses Pokémon de Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
