import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [P]",
		fr: "Zarbi P"
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
		fr: "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	},

	abilities: [{
		name: {
			fr: "[Perform]"
		},

		effect: {
			fr: "Si une attaque a infligé des dégâts à Zarbi [P] pendant le dernier tour de votre adversaire et si Zarbi [P] était votre Pokémon Actif, l'attaque Puissance cachée de Zarbi [P] inflige le même nombre de dégâts supplémentaires au Pokémon Défenseur. Ce pouvoir fonctionne même si Zarbi (P] est Confus."
		},

		type: "Pokemon Power"
	}]
}

export default card
