import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 80,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette",
			},
			effect: {
				en: "Any damage done to this Pokémon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-Boulé",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
