import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Blaziken",
		'fr-fr': "Brasegali",
		'de-de': "Lohgock"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fire Dance",
				'fr-fr': "Danse du feu",
				'de-de': "Feuertanz"
			},
			effect: {
				'en-us': "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie Fire et attachez-la à 1 de vos Pokémon.",
				'de-de': "Durchsuche deinen Ablagestapel nach einer -Energiekarte und lege sie an 1 deiner Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flame Kick",
				'fr-fr': "Coup enflammé",
				'de-de': "Flammenkick"
			},
			effect: {
				'en-us': "Discard 2 Fire Energy attached to Blaziken. This attack does 80 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies Fire attachées à Brasegali. Cette attaque inflige 80 dégâts à 1 des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
				'de-de': "Entferne 2 -Energien von Lohgock und lege sie auf deinen Ablagestapel. Dieser Angriff fügt 1 Pokémon deines Gegners 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Flames spout from its wrists, enveloping its knuckles. Its punches scorch its foes.",
	},

	thirdParty: {
		cardmarket: 277903,
		tcgplayer: 83909
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
