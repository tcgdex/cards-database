import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Garbodor",
		fr: "Miasmax",
	},
	illustrator: "Kouki Saitou",
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
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent (à part Miasmotoxine).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Offensive Bomb",
				fr: "Bombe Offenseuse",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
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
