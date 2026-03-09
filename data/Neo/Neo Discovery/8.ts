import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Politoed",
		fr: "Tarpaud",
		de: "Quaxo"
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
		en: "Poliwhirl",
		fr: "Têtarte"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Frog Song",
				fr: "Chant de crapaud",
				de: "Frosch-Lied"
			},
			effect: {
				en: "Whenever Politoed's attack damages the Defending Pokémon (after applying Weakness and Resistance), if there are more than 3 Poliwags, Poliwhirls, Poliwraths, and/or Politoeds in play (including your opponent's), that attack does 40 more damage (no matter how many heads you get). This power stops working while Politoed is Asleep, Confused, or Paralyzed.",
				fr: "Quand l'attaque de Tarpaud fait des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), s'il y a plus de 3 Ptitards, Têtartes, Tartards et/ou Tarpauds en jeu (y compris chez votre adversaire), cette attaque fait 40 dégâts supplémentaires (quel que soit le nombre de faces obtenu). Ce pouvoir cesse de faire effet si Tarpaud est Endormi, Confus ou Paralysé.",
				de: "Wenn mehr als drei Quapsel, Quaputzi, Quappo und/oder Quaxo im Spiel (auch die deines gegners) und wenn Quaxos Angriff dem verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff 40 weitere Schadenspunkte zu (unabhängig davon, wie oft du \"Kopf\" geworfen hast). Deise Fähigkeit verliert ihre Wirkung, solange Quaxo schläft, verwirrt oder gelähmt ist."
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
				en: "Doubleslap",
				fr: "Torgnoles",
				de: "Duplexhieb"
			},

			effect: {
				en: "Flip 2 coins. This attack does 40 times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	description: {
		fr: "Quand trois d'entre eux se retrouvent, ils chantent d'une voix tonitruante qui ressemble à des beuglements."
	},

	thirdParty: {
		cardmarket: 274519,
		tcgplayer: 88246
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
