import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Registeel Star",
		fr: "Registeel ☆",
		de: "Registeel *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		379,
	],

	hp: 90,

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
				en: "Barrier Attack",
				fr: "Attaque d'obstacle",
				de: "Angriffsbarriere"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Registeel Star by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Registeel  par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Im nächsten Zug deines Gegners wird Schaden, der Registeel * durch Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Final Laser",
				fr: "Laser final",
				de: "Finaler Laser"
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Pokémon in any way you like. If your opponent has only 1 Prize card left and Registeel Star is the only Pokémon you have in play, put 6 damage counters instead.",
				fr: "Placez 3 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez. S'il reste à votre adversaire une seule carte Récompense et que Registeel  est le seul Pokémon que vous ayez en jeu, placez 6 marqueurs de dégât.",
				de: "Lege 3 Schadensmarken in beliebiger Verteilung auf die gegnerischen Pokémon. Wenn dein Gegner nur noch einen Preis übrig hat, und Registeel * das einzige Pokémon ist, das du im Spiel hast, lege stattdessen 6 Schadensmarken in beliebiger Verteilung auf die gegnerischen Pokémon."
			}

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
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 3,

	thirdParty: {
		tcgplayer: 88678
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
