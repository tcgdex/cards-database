import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
		de: "Woingenau"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Countercharge",
				fr: "Contre-charge",
				de: "Konterangriff"
			},
			effect: {
				en: "Flip a coin. If heads, move all damage counters from Wobbuffet to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, déplacez tous les marqueurs de dégât de Qulbutoké sur le Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei \"Kopf\" entferne alle Schadensmarken von Woingenau und lege sie auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		fr: "Il cherche désespérément à cacher sa queue noire. Certains pensent qu'elle renferme un secret."
	},

	thirdParty: {
		cardmarket: 277540,
		tcgplayer: 90620
	}
}

export default card
