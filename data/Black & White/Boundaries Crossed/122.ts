import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		508,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sentinel",
				fr: "Sentinelle",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Supporter cards from his or her hand.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Supporter de sa main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Tackle",
				fr: "Tacle Brutal",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
