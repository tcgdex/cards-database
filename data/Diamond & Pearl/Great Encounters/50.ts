import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Purugly",
		fr: "Chaffreux",
		de: "Shnurgarst"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		432,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swagger",
				fr: "Vantardise",
				de: "Angeberei"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei \"Kopf\" lege eine Energie, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277952
	}
}

export default card
