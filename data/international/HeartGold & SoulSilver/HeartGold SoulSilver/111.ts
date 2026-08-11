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

	hp: 140,

	types: [
		"Fire"
	],

	suffix: "Legend",
	stage: "Basic",
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

	description: {
		'en-us': "Legends claim this Pokémon flies the world’s skies continuously on its magnificent, seven-colored wings."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279083,
				tcgplayer: 86133
			}
		}
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sacred Rainbow",
				'fr-fr': "Arc-en-ciel sacré"
			},
			effect: {
				'en-us': "All Energy attached to Ho-Oh LEGEND are Fire Energy instead of their usual type.",
				'fr-fr': "Toutes les Énergies attachées à Ho-Oh LÉGENDE sont de type Feu et non de leur type habituel."
			}
		},
	],

	attacks: [
		{
			name: {
				'en-us': "Bright Wing",
				'de-de': "Strahlenschwinge",
				'fr-fr': "Ailes lumineuses"
			},
			damage: 100,
			effect: {
				'en-us': "Discard an Energy attached to Ho-Oh LEGEND.",
				'de-de': "Lege 1 an Ho-Oh-LEGENDE angelegte Energie auf deinen Ablagestapel.",
				'fr-fr': "Défaussez une Énergie attachée à Ho-Oh LÉGENDE."
			},
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			]
		},
	],
}

export default card
