import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Alolan Muk",
		fr: "Grotadmorv d’Alola",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power of Alchemy",
				fr: "Osmose",
			},
			effect: {
				en: "Each Basic Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities.",
				fr: "Aucun Pokémon de base en jeu, dans la main de chaque joueur et dans leur pile de défausse, n’a de talent.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
