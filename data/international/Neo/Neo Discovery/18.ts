import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'de-de': "Bibor"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				'en-us': "Triple Poison",
				'fr-fr': "Triple poison",
				'de-de': "Dreifachgift"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Your opponent now puts 3 damage counters instead of 1 after each player's turn (even if it was already Poisoned).",
				'fr-fr': "Lancez 1 pièce. Si c'est face, le Pokémon Défenseur est Empoisonné. Votre adversaire ajoute 3 marqueurs de dégâts au lieu de 1 après chaque tour (même s'il était déjà Empoisonné).",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt vergiftet. Dein gegner legt jetzt nach dem Zug jedes Spielers drei Schadensmarken (statt einer) auf es (selbst wenn es vorher bereits vergiftet war)."
			},

			damage: 10
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],

			name: {
				'en-us': "Pin Missile",
				'fr-fr': "Dard-nuée",
				'de-de': "Nadelrakete"
			},

			effect: {
				'en-us': "Flip 4 coins. This attack does 20 times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf vier Münzen. Dieser Angriff fügt 20 schadenspunkte mal der Anzahl \"Kopf\" zu."
			},

			damage: "20x"
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
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "It can take down any opponent with its powerful poison stingers. It sometimes attacks in swarms.",
		'fr-fr': "Il peut vaincre ses adversaires avec ses puissants dards empoisonnés. Parfois, il attaque avec le reste de l'essaim."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274529,
				tcgplayer: 83767
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274529,
				tcgplayer: 83767
			}
		}
	]
}

export default card
