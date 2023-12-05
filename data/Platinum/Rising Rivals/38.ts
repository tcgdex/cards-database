import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Alakazam 4",
		fr: "Alakazam  Niv. 56",
		de: "Simsala 4"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Recover",
				fr: "Soin",
				de: "Genesung"
			},
			effect: {
				en: "Discard a Psychic Energy attached to Alakazam and remove 4 damage counters from Alakazam .",
				fr: "Défaussez une carte Énergie Psychic attachée à Alakazam  et retirez-lui 4 marqueurs de dégât.",
				de: "Lege 1 an Simsala 4 angelegte -Energie auf deinen Ablagestapel und entferne 4 Schadensmarken von Simsala 4."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mysterious Beam",
				fr: "Rayon mystérieux",
				de: "Seltsamer Strahl"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
