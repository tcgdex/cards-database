import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Baudrive",
		de: "Driftlon"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		425,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	evolveFrom: {
		fr: "Baudrive",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Unburden",
				fr: "Délestage",
				de: "Entlastung"
			},
			effect: {
				en: "If Drifloon has a Pokémon Tool card attached to it, Drifloon's Retreat Cost is colorless colorless more.",
				fr: "Si Baudrive possède une carte Outil Pokémon, son Coût de Retraite est de ColorlessColorless de plus.",
				de: "Wenn an Driftlon 1 Pokémon-Ausrüstung angelegt ist, sind Driftlons Rückzugskosten um  erhöht."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Big Explosion",
				fr: "Grosse explosion",
				de: "Große Explosion"
			},
			effect: {
				en: "Drifloon does 50 damage to itself.",
				fr: "Baudrive s'inflige 50 dégâts.",
				de: "Driftlon fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 50,

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

	thirdParty: {
		cardmarket: 278297
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
