import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charm",
				fr: "Charme"
			},
			effect: {
				en: "If the Defending Pokémon attacks during your opponent's next turn, any damage it does is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Si le Pokémon Défenseur attaque pendant le prochain tour de votre adversaire, tous les dégâts qu'il inflige sont réduits de 10 (avant application de la Faiblesse et de la Résistance)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spike Ball Tackle",
				fr: "Charge balle pic"
			},
			effect: {
				en: "Togepi does 10 damage to itself.",
				fr: "Togepi s'inflige 10 dégâts."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "On raconte que sa coquille est pleine de bonheur, qu'il partage avec tous ceux qui sont gentils avec lui."
	}
}

export default card
