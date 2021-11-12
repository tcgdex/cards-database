import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Dragonite",
		fr: "Dracolosse lumineux"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dragonair",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Miraculous Wind",
				fr: "Vent miraculeux"
			},
			effect: {
				en: "As long as Light Dragonite is your Active Pokémon, each Special Energy card provides Colorless Energy instead of its usual type and its other effects stop working. This power stops working while Light Dragonite is Asleep, Confused, or Paralyzed.",
				fr: "Tant que Dracolosse lumineux est votre Pokémon Actif, toutes les cartes Énergie spéciale fournissent de l'Énergie  au lieu de leur type d'Énergie habituel et leurs autres effets cessent de fonctionner. Ce pouvoir cesse de fonctionner si Dracolosse lumineux est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Light Wave",
				fr: "Vague lumineuse"
			},
			effect: {
				en: "During your opponent's next turn, prevent all effects of attacks that are not damage done to this Pokémon.",
				fr: "Prévenez tous les effets d'attaques, excepté les dégâts, infligés lors d'attaques contre Dracolosse lumineux pendant le prochain tour de votre adversaire."
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "On raconte qu'il vole constamment au-dessus des mers, à la recherche de personnes ayant besoin d'aide."
	}
}

export default card
