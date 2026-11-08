import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Politoed",
		'fr-fr': "Tarpaud",
		'de-de': "Quaxo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		186,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Frog Song",
				'fr-fr': "Chant de crapaud",
				'de-de': "Frosch-Lied"
			},
			effect: {
				'en-us': "Whenever Politoed's attack damages the Defending Pokémon (after applying Weakness and Resistance), if there are more than 3 Poliwags, Poliwhirls, Poliwraths, and/or Politoeds in play (including your opponent's), that attack does 40 more damage (no matter how many heads you get). This power stops working while Politoed is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Quand l'attaque de Tarpaud fait des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), s'il y a plus de 3 Ptitards, Têtartes, Tartards et/ou Tarpauds en jeu (y compris chez votre adversaire), cette attaque fait 40 dégâts supplémentaires (quel que soit le nombre de faces obtenu). Ce pouvoir cesse de faire effet si Tarpaud est Endormi, Confus ou Paralysé.",
				'de-de': "Wenn mehr als drei Quapsel, Quaputzi, Quappo und/oder Quaxo im Spiel (auch die deines gegners) und wenn Quaxos Angriff dem verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff 40 weitere Schadenspunkte zu (unabhängig davon, wie oft du \"Kopf\" geworfen hast). Deise Fähigkeit verliert ihre Wirkung, solange Quaxo schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Doubleslap",
				'fr-fr': "Torgnoles",
				'de-de': "Duplexhieb"
			},

			effect: {
				'en-us': "Flip 2 coins. This attack does 40 times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf zwei Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},

			damage: "40x"
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Whenever three or more of these get together, they sing in a loud voice that sounds like bellowing.",
		'fr-fr': "Quand trois d'entre eux se retrouvent, ils chantent d'une voix tonitruante qui ressemble à des beuglements."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274519,
				tcgplayer: 88249
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274519,
				tcgplayer: 88249
			}
		}
	]
}

export default card

