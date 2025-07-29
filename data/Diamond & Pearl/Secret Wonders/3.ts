import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 130,

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
				en: "Fury Blaze",
				fr: "Flammes frénétiques",
				de: "Loderfurie"
			},
			effect: {
				en: "If your opponent has 3 or less Prize cards left, each of Charizard's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Si votre adversaire possède moins de 3 cartes Récompense, chacune des attaques de Dracaufeu inflige 50 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance.)",
				de: "Wenn dein Gegner 3 oder weniger Preise übrig hat, fügt jeder Angriff von Glurak dem Aktiven Pokémon 50 zusätzliche Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Blast Burn",
				fr: "Rafale feu",
				de: "Lohekanonade"
			},
			effect: {
				en: "Flip a coin. If heads, discard 2 Energy cards attached to Charizard. If tails, discard 4 Energy cards attached to Charizard. (If you can't, this attack does nothing.)",
				fr: "Lancez une pièce. Si c'est face, défaussez 2 cartes Énergie attachées à Dracaufeu. Si c'est pile, défaussez 4 cartes Énergie attachées à Dracaufeu. (Si vous ne pouvez pas, cette attaque est sans effet).",
				de: "Wirf 1 Münze. Bei \"Kopf\" lege 2 an Glurak angelegte Energiekarten auf deinen Ablagestapel. Bei \"Zahl\" lege 4 an Glurak angelegte Energiekarten auf deinen Ablagestapel. (Wenn du dies nicht tun kannst, hat dieser Angriff keine Auswirkungen.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+40"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 277756
	}
}

export default card
