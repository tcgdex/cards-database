import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Burn",
				fr: "Dépense d'énergie",
				de: "Energie verbrennen"
			},
			effect: {
				en: "All Energy attached to Charizard are fire Energy instead of their usual type.",
				fr: "Toutes les Énergies attachées à Dracaufeu sont des Énergies Fire au lieu de leur type habituel.",
				de: "Alle Energien, die an Glurak angelegt sind, liefern -Energie anstelle ihres normalen Typs."
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
				en: "Fire Spin",
				fr: "Danseflamme",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 Energy attached to Charizard.",
				fr: "Défaussez 2 Énergies attachées à Dracaufeu.",
				de: "Lege 2 an Glurak angelegte Energien auf deinen Ablagestapel."
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
			value: "-30"
		},
	],

	retreat: 3,

	description: {
		fr: "Ses ailes peuvent le faire voler à plus de 1 400 mètres d'altitude. Ce Pokémon crache du feu à des températures très élevées."
	},

	thirdParty: {
		cardmarket: 278401,
		tcgplayer: 84190
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
