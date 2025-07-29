import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Demolosse",
		de: "Hundemon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Houndour",
		fr: "Hunduster",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Revenge Fang",
				fr: "Croc vengeur",
				de: "Vergeltungszahn"
			},
			effect: {
				en: "If you have less Benched Pokémon than your opponent, each of Houndoom's attacks does 40 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Si vous possédez moins de Pokémon de Banc que votre adversaire, chacune des attaques de Demolosse inflige 40 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
				de: "Wenn du weniger Pokémon auf der Bank hast als dein Gegner, fügt jeder Angriff von Hundemon den Aktiven Pokémon 40 zusätzliche Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Burning Sensation",
				fr: "Sensation brûlante",
				de: "Brennendes Gefühl"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Brûlé.",
				de: "Wenn auf dem Verteidigenden Pokémon bereits mindestens 1 Schadensmarke liegt, ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Bright Flame",
				fr: "Flamme éclatante",
				de: "Helle Flamme"
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Fire Energy attached to Houndoom.",
				fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies Fire attachées à Demolosse.",
				de: "Wirf 1 Münze. Bei \"Zahl\" entferne 2 -Energien, die an Hundemon angelegt sind, und lege sie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Jadis, les gens prenaient son étrange hurlement pour l'appel de la Faucheuse."
	},

	thirdParty: {
		cardmarket: 278206
	}
}

export default card
