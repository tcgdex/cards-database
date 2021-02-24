import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
	},
	illustrator: "Asako Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 90,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Water",
			],
			name: {
				en: "Raging Blade",
				fr: "Lame en Furie",
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 50 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 30,

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
