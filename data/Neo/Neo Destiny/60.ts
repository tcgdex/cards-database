import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [Z]",
		fr: "Zarbi Z",
		de: "Icognito Z"
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
				en: "[Zoom]",
				fr: "[Zoom]",
				de: "Zoom"
			},
			effect: {
				en: "As long as Unown Z is Benched, you pay no Energy cost to retreat a Pokémon with Unown in its name.",
				fr: "Tant que Zarbi [Z] est sur votre Banc, vous ne payez aucun coût d'Énergie pour faire battre en retraite vos Pokémon Zarbi.",
				de: "As long as Unwon Z is benched, you may pay no Energy cost to retreat Pokémon with Unown in its name."
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
		cardmarket: 274712,
		tcgplayer: 90246
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
