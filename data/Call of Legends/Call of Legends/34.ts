import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		de: "Tangoloss"
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		465,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase",
				de: "Zermahlen"
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to Tangrowth.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à Bouldeneu.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Tangoloss angelegten Energien zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Plow Over",
				fr: "Labour",
				de: "Umpflügen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, put 1 Energy card attached to the Defending Pokémon in the Lost Zone.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé. Si c’est pile, placez 1 carte Énergie attachée au Pokémon Défenseur dans la Zone Perdue.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt. Bei \"Zahl\" lege 1 an das Verteidigende Pokémon angelegte Energiekarte ins Nirgendwo."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
