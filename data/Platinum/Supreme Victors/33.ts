import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Mawile",
		fr: "Mysdibule",
		de: "Flunkifer"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		303,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Turnaround Standby",
				fr: "Demi-tour en standby",
				de: "Wendewarte"
			},
			effect: {
				en: "During your next turn, any damage done by Mawile's Swallow or Bite to your opponent's Active Pokémon is increased by 40 (before applying Weakness and Resistance).",
				fr: "Lors de votre prochain tour, tous les dégâts infligés par Avale ou Morsure de Mysdibule au Pokémon Actif de votre adversaire sont augmentés de 40 (avant application de la Faiblesse et de la Résistance).",
				de: "Während deines nächsten Zuges wird Schaden, der den Aktiven Pokémon deines Gegners durch Flunkifers Biss oder Verschlucken zugefügt würde, um 40 Schadenspunkte erhöht (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow",
				fr: "Avale",
				de: "Verschlucken"
			},
			effect: {
				en: "Remove from Mawile the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Retirez à Mysdibule autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
				de: "Entferne Schadensmarken von Flunkifer entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon durch diesen Angriff zugefügt wurden."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278724
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
