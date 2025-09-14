import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		de: "Bibor"
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
		en: "Kakuna",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				en: "Triple Poison",
				fr: "Triple poison",
				de: "Dreifachgift"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Your opponent now puts 3 damage counters instead of 1 after each player's turn (even if it was already Poisoned).",
				fr: "Lancez 1 pièce. Si c'est face, le Pokémon Défenseur est Empoisonné. Votre adversaire ajoute 3 marqueurs de dégâts au lieu de 1 après chaque tour (même s'il était déjà Empoisonné).",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt vergiftet. Dein gegner legt jetzt nach dem Zug jedes Spielers drei Schadensmarken (statt einer) auf es (selbst wenn es vorher bereits vergiftet war)."
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
				en: "Pin Missile",
				fr: "Dard-nuée",
				de: "Nadelrakete"
			},

			effect: {
				en: "Flip 4 coins. This attack does 20 times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf vier Münzen. Dieser Angriff fügt 20 schadenspunkte mal der Anzahl \"Kopf\" zu."
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
		fr: "Il peut vaincre ses adversaires avec ses puissants dards empoisonnés. Parfois, il attaque avec le reste de l'essaim."
	},

	thirdParty: {
		cardmarket: 274529,
		tcgplayer: 83767
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
