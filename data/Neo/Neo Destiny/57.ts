import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [C]",
		fr: "Zarbi C",
		de: "Icognito C"
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
				en: "[Chase]",
				fr: "[Chase]",
				de: "Chase"
			},
			effect: {
				en: "As long as Unown C is your Active Pokémon, whenever your opponent's Active Pokémon tries to retreat, flip a coin. If heads, put 1 damage counter on that Pokémon. Apply Weakness and Resistance.",
				fr: "Tant que Zarbi [C] est votre Pokémon Actif, si le Pokémon Actif de votre adversaire essaie de battre en retraite, lancez une pièce. Si c'est face, placez 1 marqueur de dégâts sur ce Pokémon. Appliquez la Faiblesse et la Résistance.",
				de: "As laong as Unown C is your Active Pokémon, whenever your opponent's Active Pokémon tries to retreat, flip a coin. If heads, put 1 damage counter on that Pokémon. Apply Weakness and Resistance"
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
				fr: "Puissance cachée",
				de: "Kraftreserve"
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

	thirdParty: {
		cardmarket: 274709,
		tcgplayer: 90201
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
