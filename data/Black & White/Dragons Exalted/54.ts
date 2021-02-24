import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Garbodor",
		fr: "Miasmax",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		569,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Garbotoxin",
				fr: "Miasmotoxine",
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Garbotoxin).",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de capacité spéciale (à part Miasmotoxine).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Sludge Toss",
				fr: "Giclée Vaseuse",
			},

			damage: 60,

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
