import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		14,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Stiffen",
				fr: "Raidir",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Kakuna by attacks is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Coconfort par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spit Poison",
				fr: "Crache-venin",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
