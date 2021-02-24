import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Garbodor",
		fr: "Miasmax",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		569,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Biosmog",
				fr: "Brouillard Toxique",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, discard an Energy attached to that Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Sludge Bomb",
				fr: "Bomb-Beurk",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
