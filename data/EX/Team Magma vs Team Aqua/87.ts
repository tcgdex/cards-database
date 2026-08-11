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
		en: "Magma Energy can be attached only to a Pokémon with Team Magma in its name. Magma Energy provides Fighting and /or Darkness Energy but provides 2 Energy at a time. (Doesn't count as a basic Energy card when not in play and has no other effect than providing Energy.) At the end of your turn, discard Magma Energy.",
		de: "Magma Energy can be attached only to a Pokémon with Team Magma in its name. Magma Energy provides  and /or  Energy but provied 2 Energy at a time. (Doesn't count as a basci Energy card wehn not in play and has no effect other than providing Energy.) At the end of your turn, discard Magma Energy.",
		fr: "Énergie Magma ne peut être attachée qu'à un Pokémon dont le nom comporte Team Magma. Énergie Magma fournit 2 Énergies à la fois, Combat et Obscurité. (Elle ne compte pas comme carte Énergie de base lorsqu'elle n'est pas en jeu et n'a pas d'autre effet que de fournir de l'Énergie.) À la fin de votre tour, défaussez Énergie Magma."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275864,
				tcgplayer: 87039
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275864,
				tcgplayer: 87039
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				cardmarket: 871881,
				tcgplayer: 477394
			}
		}
	],

	retreat: 0
}

export default card
