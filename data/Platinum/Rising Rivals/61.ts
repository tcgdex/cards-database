import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Forretress G",
		fr: "Forretress  Niv. 35",
		de: "Forstellka G"
	},

	illustrator: "Ryota Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 80,

	types: [
		"Metal",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shell Scatter",
				fr: "Écrat'coquille",
				de: "Streugranate"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Forretress can't use Shell Scatter during your next turn.",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Forretress  ne peut pas utiliser Écras'coquille lors de votre prochain tour.",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Forstellka G kann Streugranate in deinem nächsten Zug nicht einsetzen."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Bomb Risk",
				fr: "Risque de bombe",
				de: "Risikobombe"
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, Forretress does 80 damage to itself.",
				fr: "Inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Lancez une pièce. Si c'est pile, Forretress  s'inflige 80 dégâts.",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank (deinen und denen deines Gegners) 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wirf 1 Münze. Bei \"Zahl\" fügt Forstellka G sich selbst 80 Schadenspunkte zu."
			},
			damage: 80,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		tcgplayer: 85554
	}
}

export default card
