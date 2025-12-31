import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Politoed",
		fr: "Tarpaud",
		de: "Quaxo"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		186,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Quaputzi",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Enthusiasm",
				fr: "Enthousiasme",
				de: "Begeisterung"
			},
			effect: {
				en: "If you have Poliwag, Poliwhirl, and Poliwrath in play, each of these Pokémon's attacks does 60 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Si vous possédez Ptitard, Tetarte et Tartard en jeu, chacune des attaques de ces Pokémon inflige 60 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
				de: "Wenn du Quapsel, Quaputzi und Quappo im Spiel hast, fügt jeder Angriff dieser Pokémon den Verteidigenden Pokémon 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Frog Hop",
				fr: "Bond de grenouille",
				de: "Froschhopser"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 1,

	description: {
		fr: "Il rassemble ses pairs pour les commander. Il utilise son cri pour diriger Ptitard."
	},

	thirdParty: {
		cardmarket: 278161,
		tcgplayer: 88250
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
