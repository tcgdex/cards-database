import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Baudrive",
		de: "Driftlon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		425,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Delivery",
				fr: "Livraison",
				de: "Anlieferung"
			},
			effect: {
				en: "Flip a coin. If heads, put any 1 card from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c'est face, placez dans votre main n'importe quelle carte de votre pile de défausse.",
				de: "Wirf 1 Münze. Bei 'Kopf' wähle 1 Karte aus deinem Ablagestapel und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Reaction",
				fr: "Réagir",
				de: "Reaction"
			},
			effect: {
				en: "Switch Drifloon with 1 of your Benched Pokémon.",
				fr: "Échangez Baudrive avec 1 des Pokémon de votre Banc.",
				de: "Tausche Driftlon gegen 1 Pokémon auf diener Bank aus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278110
	}
}

export default card
