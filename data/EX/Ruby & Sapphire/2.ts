import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon",
		de: "Papinella"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		267,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Withering Dust",
				fr: "Poussière desséchante",
				de: "Withering Dust"
			},
			effect: {
				en: "As long as Beautifly is in play, do not apply Resistance for all Active Pokémon.",
				fr: "Tant que Charmillon est en jeu, vous ne pouvez pas appliquer la Résistance aux Pokémon Actifs.",
				de: "As long as Beautifly is in play, do not apply Resistance for all Active Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Poussière paralysante",
				de: "Stun Spore"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Parallel Gain",
				fr: "Gain parallèle",
				de: "Parallel Gain"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon, including Beautifly.",
				fr: "Retirez un marqueur de dégât à tous vos Pokémon, Charmillon inclus.",
				de: "Remove 1 damage counter from each of your Pokémon, including Beautifly"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 275650,
		tcgplayer: 83755
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
