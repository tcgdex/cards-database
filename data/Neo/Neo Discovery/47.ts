import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [D]",
		fr: "Zarbi D"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Darkness",
				fr: "[Darkness]"
			},
			effect: {
				en: "Whenever a D Pokémon damages 1 of your Pokémon, reduce that damage by 30 (after applying Weakness and Resistance). This power stops working if you have more than 1 Unown D in play. (This power even works if Unown D is Asleep, Confused, or Paralyzed.)",
				fr: "Quand un Pokémon  inflige des dégâts à votre Pokémon, réduisez ces dégâts de 30 (après application de la Faiblesse et de la Résistance). Ce pouvoir cesse de fonctionner s'il y a plus d'un Zarbi [D] en jeu. (Ce pouvoir fonctionne même si Zarbi [D] est Endormi, Confus ou Paralysé.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	}
}

export default card
