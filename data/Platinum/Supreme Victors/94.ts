import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Buneary",
		fr: "Laporeille",
		de: "Haspiror"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		427,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bounce",
				fr: "Faire des bonds",
				de: "Sprungfeder"
			},
			effect: {
				en: "Switch Buneary with 1 of your Benched Pokémon.",
				fr: "Échangez Laporeille avec 1 des Pokémon de votre Banc.",
				de: "Tausche Haspiror gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mini Drain",
				fr: "Mini-assèchement",
				de: "Minisauger"
			},
			effect: {
				en: "Remove 1 damage counter from Buneary.",
				fr: "Retirez à Laporeille 1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von Haspiror."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278785
	}
}

export default card
