import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Brasegali",
		de: "Lohgock"
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
		en: "Combusken",
		fr: "Galifeu",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fire Dance",
				fr: "Danse du feu",
				de: "Feuertanz"
			},
			effect: {
				en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie Fire et attachez-la à 1 de vos Pokémon.",
				de: "Durchsuche deinen Ablagestapel nach einer -Energiekarte und lege sie an 1 deiner Pokémon an."
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
				en: "Flame Kick",
				fr: "Coup enflammé",
				de: "Flammenkick"
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Blaziken. This attack does 80 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Fire attachées à Brasegali. Cette attaque inflige 80 dégâts à 1 des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
				de: "Entferne 2 -Energien von Lohgock und lege sie auf deinen Ablagestapel. Dieser Angriff fügt 1 Pokémon deines Gegners 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
