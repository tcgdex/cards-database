import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Simipour",
		fr: "Flotoutan",
		es: "Simipour",
		it: "Simipour",
		pt: "Simipour",
		de: "Sodachita"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		516,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
		de: "Sodamak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grass' Power",
				fr: "Pouvoir Fertilisant",
				de: "Pflanzenmacht"
			},
			effect: {
				en: "If this Pokémon has any Grass Energy attached to it, heal 20 damage from this Pokémon.",
				fr: "Si de l'Énergie Grass est attachée à ce Pokémon, soignez 20 dégâts à ce Pokémon.",
				de: "Wenn an dieses Pokémon bereits {G}-Energie angelegt ist, heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rushing Water",
				fr: "Courant Fort",
				de: "Stromschnelle"
			},
			effect: {
				en: "Move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
				fr: "Déplacez une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
				de: "Verschiebe 1 an das Verteidigende Pokémon angelegte Energie auf 1 Pokémon auf der Bank deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The tuft on its head holds water. When the level runs low, it replenishes the tuft by siphoning up water with its tail.",
		de: "Speichert Wasser im Büschel auf seinem Kopf. Sinkt der Wasserstand, tankt es über seinen Schweif neue Flüssigkeit."
	},

	thirdParty: {
		cardmarket: 279988,
		tcgplayer: 89218
	}
}

export default card
