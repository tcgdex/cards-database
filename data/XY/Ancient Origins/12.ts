import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Virizion",
		fr: "Viridium",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		640,
	],
	hp: 110,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bail Out",
				fr: "Renflouage",
			},
			effect: {
				en: "Put 2 Pokémon from your discard pile into your hand.",
				fr: "Ajoutez 2 Pokémon de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Prize Count",
				fr: "Compteur de Récompense",
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, this attack does 80 more damage.",
				fr: "S'il vous reste plus de cartes Récompense que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
