import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Ho-Oh LEGEND",
		fr: "Ho-Oh LÉGENDAIRE",
	},
	illustrator: "Shinji Higuchi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],

	types: [
		"Fire",
	],


	suffix: "Legend",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sacred Rainbow",
				fr: "Arc-en-ciel sacré",
			},
			effect: {
				en: "All energy attached to Ho-Oh LEGEND are Fire Energy instead of their usual type.",
				fr: "Toute les énergies attachées au Ho-Oh LÉGENDAIRE sont de type Fire et non de leur type habituel.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Bright Wing",
				fr: "Ailes lumineuses",
			},
			effect: {
				en: "Discard an Energy attached to Ho-Oh LEGEND.",
				fr: "Défaussez-vous d’une Énergie attachée au Ho-Oh LÉGENDAIRE.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
