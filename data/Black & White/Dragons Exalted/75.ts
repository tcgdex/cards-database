import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse",
		es: "Houndoom",
		it: "Houndoom",
		pt: "Houndoom",
		de: "Hundemon"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280514,
		tcgplayer: 86212
	}
}

export default card
