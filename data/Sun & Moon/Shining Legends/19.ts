import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Croconaw",
		fr: "Crocrodil",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		159,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Plunge",
				fr: "Plongeon",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may move all Energy from your Active Pokémon to this Pokémon. If you do, switch it with your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez déplacer toute l’Énergie de votre Pokémon Actif vers ce Pokémon. Dans ce cas, échangez-le avec votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
