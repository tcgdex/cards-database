import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Slowbro",
		fr: "Flagadoss obscur",
		de: "Dunkles Lahmus"
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
				fr: "Rembobinage",
				de: "An Land ziehen"
			},
			effect: {
				en: "When you play Dark Slowbro from your hand, choose up to 3 Basic Pokémon and/or Evolution cards from your discard pile and put them into your hand.",
				fr: "Lorsque vous jouez Flagadoss obscur depuis votre main, choisissez jusqu'à 3 Pokémon de base et/ou cartes Évolution de votre pile de défausse et placez-les dans votre main.",
				de: "Wenn du Dunkles Lahmus von einer Hand spielst, wähle bis zu 3 Basis-Pokémon- und/oder Evolutionskarten von deinem Ablagestapel und nimm sie auf deine Hand."
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
				fr: "Attaque inconstante",
				de: "Launischer Angriff"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirfeine Münze. Bei Zahl hat dieser Angriff keine Schadenspunkte"
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
	},

	thirdParty: {
		cardmarket: 274065,
		tcgplayer: 84654
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
