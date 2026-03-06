import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Vibrava",
		fr: "Vibraninf",
		de: "Vibrava"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		329,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Levitate",
				fr: "Lévitation",
				de: "Schwebe"
			},
			effect: {
				en: "If Vibrava has any basic Energy cards attached to it, Vibrava's Retreat Cost is 0.",
				fr: "Si Vibraninf possède des cartes Énergie de base, son Coût de retraite est de 0.",
				de: "Solange mindestens 1 Basis-Energiekarte an Vibrava angelegt ist, betragen die Rückzugskosten von Vibrava 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wing",
				fr: "Aile tranchante",
				de: "Rasierflügel"
			},

			damage: 20,

		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 90333,
		cardmarket: 275899
	}
}

export default card
