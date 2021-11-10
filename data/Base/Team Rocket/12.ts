import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Slowbro",
		fr: "Flagadoss obscur"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Reel In",
				fr: "Rembobinage"
			},
			effect: {
				en: "When you play Dark Slowbro from your hand, choose up to 3 Basic Pokémon and/or Evolution cards from your discard pile and put them into your hand.",
				fr: "Lorsque vous jouez Flagadoss obscur depuis votre main, choisissez jusqu'à 3 Pokémon de base et/ou cartes Évolution de votre pile de défausse et placez-les dans votre main."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],

			name: {
				en: "Fickle Attack",
				fr: "Attaque inconstante"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
			},

			damage: 40
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Sa principale volonté est qu'on le laisse tranquille, il en vient parfois à être manipulé par des gens sans scrupules."
	}
}

export default card
