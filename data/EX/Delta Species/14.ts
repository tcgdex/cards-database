import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Salamence δ",
		fr: "Drattak δ",
		de: "Brutalanda"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 110,

	types: [
		"Fire",
		"Metal",
	],

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Dance",
				fr: "Danse du feu",
				de: "Feuertanz"
			},
			effect: {
				en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie  et attachez-la à 1 de vos Pokémon.",
				de: "Durchsuche deinen Ablagestapel nach einer -Energiekarte und lege sie an 1 deiner Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Delta Blast",
				fr: "Explosion Delta",
				de: "Delta-Schuss"
			},
			effect: {
				en: "Discard a Metal Energy card attached to Salamence.",
				fr: "Défaussez une carte Énergie  attachée à Drattak.",
				de: "Lege 1 an Brutalanda angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276777
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
