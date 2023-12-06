import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Ho-Oh LEGEND",
		fr: "Ho-Oh LÉGENDAIRE",
		de: "Ho-Oh LEGENDE"
	},

	illustrator: "Shinji Higuchi",
	rarity: "Ultra Rare",
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
				de: "Heiliger Regenbogen"
			},
			effect: {
				en: "All energy attached to Ho-Oh LEGEND are Fire Energy instead of their usual type.",
				fr: "Toute les énergies attachées au Ho-Oh LÉGENDAIRE sont de type Fire et non de leur type habituel.",
				de: "Alle Energien, die an Ho-Oh-LEGENDE angelegt sind, liefern -Energie anstelle ihres normalen Typs."
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
				de: "Strahlenschwinge"
			},
			effect: {
				en: "Discard an Energy attached to Ho-Oh LEGEND.",
				fr: "Défaussez-vous d’une Énergie attachée au Ho-Oh LÉGENDAIRE.",
				de: "Lege 1 an Ho-Oh-LEGENDE angelegte Energie auf deinen Ablagestapel."
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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic",

	description: {
		en: "Legends claim this Pokémon flies the world’s skies continuously on its magnificent, seven-colored wings."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 140
}

export default card
