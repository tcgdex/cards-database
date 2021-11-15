import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Vileplume ex",
		fr: "Rafflesia ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Block Dust",
				fr: "Bloque-poussière"
			},
			effect: {
				en: "As long as Vileplume ex is your Active Pokémon, your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand.",
				fr: "Tant que Rafflesia ex est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Dresseur de sa main (cartes Supporter exclues)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Special Formula",
				fr: "Formule spéciale"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned. If tails, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi et Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
