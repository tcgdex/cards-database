import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
				fr: "Croc intimidant"
			},
			effect: {
				en: "As long as Feraligatr is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Tant qu'Aligatueur est votre Pokémon Actif, les dégâts infligés à votre Pokémon par une attaque de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Pull Away",
				fr: "Arracher"
			},
			effect: {
				en: "If your opponent has 5 or more cards in his or her hand, your opponent discards a number of cards until your opponent has 4 cards left in his or her hand.",
				fr: "Si votre adversaire a au moins 5 cartes en main, il ou elle doit défausser des cartes jusqu'à ce qu'il ou elle n'ait plus que 4 cartes en main."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tonnage",
				fr: "Surpuissance"
			},
			effect: {
				en: "You may do 50 damage plus 30 more damage. If you do, Feraligatr does 30 damage to itself.",
				fr: "Vous pouvez infliger 50 dégâts plus 30 dégâts supplémentaires. Aligatueur s'inflige alors 30 dégâts."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
