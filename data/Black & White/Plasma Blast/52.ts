import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Sawk",
		fr: "Karaclée",
		es: "Sawk",
		it: "Sawk",
		pt: "Sawk",
		de: "Karadonis"
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		539,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Kick of Righteousness",
				fr: "Coup de Pied Vertueux",
			},
			effect: {
				en: "If the Defending Pokémon is a Team Plasma Pokémon, this attack does 40 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon de la Team Plasma, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Low Sweep",
				fr: "Balayette",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
