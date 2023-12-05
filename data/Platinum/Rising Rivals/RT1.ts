import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Fan Rotom",
		fr: "Motisma Hélice Niv. 46",
		de: "Wirbel-Rotom"
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fan Shift",
				fr: "Mutation hélice",
				de: "Wirbel-Wechsel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Fan Rotom's type is Colorless until the end of your turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Hélice est de type Colorless jusqu'à la fin de votre tour.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Wirbel-Rotoms Typ ist  bis zum Ende des Zuges."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spin Storm",
				fr: "Orage virevoltant",
				de: "Sturmwirbel"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire reprend dans sa main le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées.",
				de: "Wirf 1 Münze. Bei \"Kopf\" nimmt dein Gegner das Verteidigende Pokémon und alle Karten, die an es angelegt sind, auf seine Hand zurück."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d'Air",
				de: "Luftschnitt"
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy attached to Fan Rotom.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à Motisma Hélice.",
				de: "Wirf 1 Münze. Bei \"Zahl\" entferne 1 Energie, die an Wirbel-Rotom angelegt ist, und lege sie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card
