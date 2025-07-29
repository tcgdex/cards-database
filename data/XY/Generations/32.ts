import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spacing Out",
				fr: "Trou d'Mémoire",
			},
			effect: {
				en: "Flip a coin. If heads, heal 10 damage from this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, soignez 10 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Scavenge",
				fr: "Farfouille",
			},
			effect: {
				en: "Discard a Psychic Energy attached to this Pokémon. If you do, put an Item card from your discard pile into your hand.",
				fr: "Défaussez une Énergie Psychic attachée à ce Pokémon. Dans ce cas, prenez une carte Objet dans votre pile de défausse et ajoutez-la à votre main.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288470
	}
}

export default card
