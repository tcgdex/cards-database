import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Slowbro",
		'fr-fr': "Flagadoss obscur",
		'de-de': "Dunkles Lahmus"
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
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Reel In",
				'fr-fr': "Rembobinage",
				'de-de': "An Land ziehen"
			},
			effect: {
				'en-us': "When you play Dark Slowbro from your hand, choose up to 3 Basic Pokémon and/or Evolution cards from your discard pile and put them into your hand.",
				'fr-fr': "Lorsque vous jouez Flagadoss obscur depuis votre main, choisissez jusqu'à 3 Pokémon de base et/ou cartes Évolution de votre pile de défausse et placez-les dans votre main.",
				'de-de': "Wenn du Dunkles Lahmus von einer Hand spielst, wähle bis zu 3 Basis-Pokémon- und/oder Evolutionskarten von deinem Ablagestapel und nimm sie auf deine Hand."
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
				'en-us': "Fickle Attack",
				'fr-fr': "Attaque inconstante",
				'de-de': "Launischer Angriff"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirfeine Münze. Bei Zahl hat dieser Angriff keine Schadenspunkte"
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
	retreat: 2,


	description: {
		'en-us': "It loves nothing better than to be left alone, and so sometimes ends up being manipulated by unscrupulous people.",
		'fr-fr': "Sa principale volonté est qu'on le laisse tranquille, il en vient parfois à être manipulé par des gens sans scrupules."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274065,
				tcgplayer: 84654
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274065,
				tcgplayer: 84654
			}
		}
	]
}

export default card
