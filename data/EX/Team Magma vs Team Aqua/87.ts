import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Magma Energy",
		fr: "Énergie Magma",
		de: "Magma-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Magma Energy can be attached only to a Pokémon with Team Magma in its name. Magma Energy provides  and /or  Energy but provied 2 Energy at a time. (Doesn't count as a basci Energy card wehn not in play and has no effect other than providing Energy.) At the end of your turn, discard Magma Energy.",
		fr: "Énergie Magma ne peut être attachée qu'à un Pokémon dont le nom comporte Team Magma. Énergie Magma fournit 2 Énergies à la fois, Combat et Obscurité. (Elle ne compte pas comme carte Énergie de base lorsqu'elle n'est pas en jeu et n'a pas d'autre effet que de fournir de l'Énergie.) À la fin de votre tour, défaussez Énergie Magma.",
	},

	thirdParty: {
		cardmarket: 276064,
		tcgplayer: 87039
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		}
	]
}

export default card
