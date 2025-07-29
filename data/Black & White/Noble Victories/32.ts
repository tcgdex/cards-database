import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
		es: "Cryogonal",
		it: "Cryogonal",
		pt: "Cryogonal",
		de: "Frigometri"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Shard",
				fr: "Éclats Glace",
			},
			effect: {
				en: "If the Defending Pokémon is a Fighting Pokémon, this attack does 40 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Fighting, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280155
	}
}

export default card
