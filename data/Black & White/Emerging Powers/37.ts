import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Swoobat",
		fr: "Rhinolove",
		es: "Swoobat",
		it: "Swoobat",
		pt: "Swoobat",
		de: "Fletiamo"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		528,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Woobat",
		fr: "Chovsourir",
		de: "Fleknoil"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
				de: "Psychoschuss"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Phat Sound",
				fr: "Cri Perçant",
				de: "Fetter Sound"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Wirf 3 Münzen. Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte mal der Anzahl „Kopf“ zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Anyone who comes into contact with the ultrasonic waves emitted by a courting male experiences a positive mood shift.",
		de: "Wer den Ultraschallwellen eines Männchens in der Balz ausgesetzt wird, verfällt in eine euphorische Stimmung."
	},

	thirdParty: {
		cardmarket: 280002,
		tcgplayer: 89725
	}
}

export default card
