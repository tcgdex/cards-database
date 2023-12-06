import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
		de: "Kapoera"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Triple Kick",
				fr: "Triple pied",
				de: "Dreifachkick"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Close Combat",
				fr: "Combat rapproché",
				de: "Nahkampf"
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to Hitmontop by attacks is increased by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Kapoera par des attaques pendant le prochain tour de votre adversaire sont augmentés de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Kapoera durch Angriffe zugefügt wird, um 20 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It launches kicks while spinning. If it spins at high speed, it may bore its way into the ground."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
