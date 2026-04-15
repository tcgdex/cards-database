import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Aqua Energy",
		fr: "Énergie Magma",
		de: "Aqua-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Aqua Energy can be attached only to a Pokémon with Team Aqua in its name. Aqua Energy provides  and /or  Energy but provied 2 Energy at a time. (Doesn't count as a basci Energy card wehn not in play and has no effect other than providing Energy.) At the end of your turn, discard Aqua Energy.",
		fr: "Énergie Aqua ne peut être attachée qu'à un Pokémon dont le nom comporte Team Aqua. Énergie Aqua fournit 2 Énergies à la fois, Eau et Obscurité. (Elle ne compte pas comme carte Énergie de base lorsqu'elle n'est pas en jeu et n'a pas d'autre effet que de fournir de l'Énergie.) À la fin de votre tour, défaussez Énergie Aqua.",
	},

	thirdParty: {
		cardmarket: 276063,
		tcgplayer: 83565
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
