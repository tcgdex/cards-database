import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Mr. Mime 4",
		fr: "M. Mime  Niv. 53",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Magic Heal",
				fr: "Guérison magique",
			},
			effect: {
				en: "Flip 3 coins. Remove a number of damage counters equal to the number of heads from your Pokémon in any way you like.",
				fr: "Lancez 3 pièces. Retirez à vos Pokémon autant de marqueurs de dégât que vous otenez de faces de la façon que vous voulez.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Barrier Attack",
				fr: "Attaque d'obstacle",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Mr.Mime by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à M. Mime  par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
