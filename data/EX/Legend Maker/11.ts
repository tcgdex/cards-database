import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grimer",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stench",
				fr: "Puanteur"
			},
			effect: {
				en: "As long as Muk is your Active Pokémon, each player's Pokémon can't use any Poké-Powers.",
				fr: "Tant que Grotadmorv est votre Pokémon Actif, les Pokémon de chaque joueur ne peuvent pas utiliser de Poké-Powers."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Ring",
				fr: "Anneau de poison"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Toss",
				fr: "Décision vaseuse"
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
