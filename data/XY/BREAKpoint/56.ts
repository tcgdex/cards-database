import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Trubbish",
		fr: "Miamiasme",
	},
	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		568,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Acid Spray",
				fr: "Bombe Acide",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
