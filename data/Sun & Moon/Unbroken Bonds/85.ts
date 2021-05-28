import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		50,
	],
	hp: 50,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Underground Work",
				fr: "Travail Souterrain",
			},
			effect: {
				en: "If you discard this Pokémon with the effect of Giovanni's Exile, discard the top card of your opponent's deck.",
				fr: "Si vous défaussez ce Pokémon du fait de l’effet d’Exil de Giovanni, défaussez la carte du dessus du deck de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Hook",
				fr: "Crochet",
			},

			damage: 10,

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
