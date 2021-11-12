import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan"
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
				fr: "Triple poison"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Your opponent now puts 3 damage counters instead of 1 after each player's turn (even if it was already Poisoned).",
				fr: "Lancez 1 pièce. Si c'est face, le Pokémon Défenseur est Empoisonné. Votre adversaire ajoute 3 marqueurs de dégâts au lieu de 1 après chaque tour (même s'il était déjà Empoisonné)."
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
				fr: "Dard-nuée"
			},

			effect: {
				en: "Flip 4 coins. This attack does 20 times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces."
			},

			damage: "20×"
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
	}
}

export default card
