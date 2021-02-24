import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Keldeo",
		fr: "Keldeo",
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		647,
	],
	hp: 110,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bail Out",
				fr: "Renflouage",
			},
			effect: {
				en: "Put a Water Pokémon from your discard pile into your hand.",
				fr: "Ajoutez un Pokémon Water de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Resolute Blade",
				fr: "Lame Décidée",
			},
			effect: {
				en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
