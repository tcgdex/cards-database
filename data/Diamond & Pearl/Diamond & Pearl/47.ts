import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Teraclope",
		de: "Zwirrklop"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		356,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Duskull",
		fr: "Skélénox",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Roam",
				fr: "Égarement",
				de: "Umherstreifen"
			},
			effect: {
				en: "Flip a coin. If heads, put 2 damage counters on each of your opponent's Pokémon. If tails, put 2 damage counters on 1 of your Pokémon.",
				fr: "Lancez une pièce. Si c'est face, placez 2 marqueurs de dégât sur chacun des Pokémon de votre adversaire. Si c'est pile, placez 2 marqueurs de dégât sur 1 de vos Pokémon.",
				de: "Wirf 1 Münze. Bei \"Kopf\" lege 2 Schadensmarken auf jedes Pokémon deines Gegners. Bei \"Zahl\" lege 2 Schadensmarken auf 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Gravity Wave",
				fr: "Vague pesante",
				de: "Schwerkraftwelle"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon that doesn't have a Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun de vos Pokémon de Banc ne possédant pas de Coût de retraite. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, das Rückzugskosten 0 hat, 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

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

	retreat: 2,

	description: {
		fr: "Son corps est creux. On raconte que celui qui regarde à l'intérieur finira aspiré par le néant."
	}
}

export default card
