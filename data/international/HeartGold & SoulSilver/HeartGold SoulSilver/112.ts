import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Ho-Oh LEGEND",
		'fr-fr': "Ho-Oh LÉGENDAIRE",
		'de-de': "Ho-Oh LEGENDE"
	},

	illustrator: "Shinji Higuchi",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [250],

	types: [
		"Fire"
	],

	suffix: "Legend",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sacred Rainbow",
				'fr-fr': "Arc-en-ciel sacré",
				'de-de': "Heiliger Regenbogen"
			},
			effect: {
				'en-us': "All Energy attached to Ho-Oh LEGEND are Fire Energy instead of their usual type.",
				'fr-fr': "Toute les énergies attachées au Ho-Oh LÉGENDAIRE sont de type Fire et non de leur type habituel.",
				'de-de': "Alle Energien, die an Ho-Oh-LEGENDE angelegt sind, liefern -Energie anstelle ihres normalen Typs."
			}
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
				'en-us': "Bright Wing",
				'fr-fr': "Ailes lumineuses",
				'de-de': "Strahlenschwinge"
			},
			effect: {
				'en-us': "Discard an Energy attached to Ho-Oh LEGEND.",
				'fr-fr': "Défaussez-vous d’une Énergie attachée au Ho-Oh LÉGENDAIRE.",
				'de-de': "Lege 1 an Ho-Oh-LEGENDE angelegte Energie auf deinen Ablagestapel."
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
		'en-us': "Legends claim this Pokémon flies the world’s skies continuously on its magnificent, seven-colored wings."
	},

	hp: 140,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279083,
				tcgplayer: 86132
			}
		},
	],

}

export default card
