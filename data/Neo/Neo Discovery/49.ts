import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [M]",
		fr: "Zarbi M"
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
	},

	abilities: [{
		name: {
			fr: "[Metal]"
		},

		effect: {
			fr: "Quand un Pokémon  inflige des dégâts à votre Pokémon, réduisez ces dégâts de 30 (après application de la Faiblesse et de la Résistance). Ce pouvoir cesse de fonctionner s'il y a plus d'un Zarbi [M] en jeu. (Ce pouvoir fonctionne même si Zarbi [M] est Endormi, Confus ou Paralysé.)"
		},

		type: "Pokemon Power"
	}]
}

export default card
