import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Dawn Stadium",
		fr: "Stade crépuscule",
		de: "Morgen-Stadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lorsqu'un joueur attache une carte Énergie de sa main à un Pokémon Plante ou Eau, retirez à ce Pokémon 1 marqueur de dégât et tous ses États Spéciaux.",
		de: "Jedes Mal, wenn ein Spieler eine Energiekarte von seiner Hand an ein - oder -Pokémon anlegt, entferne 1 Schadensmarke und alle Speziellen Zustände von diesem Pokémon.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278128,
		tcgplayer: 84723
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
