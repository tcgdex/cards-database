import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Rainbow Energy",
		fr: "Énergie Multicolore",
		de: "Regenbogen-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Attachez Énergie multicolore à 1 de vos Pokémon. Lorsqu'elle est en jeu, Énergie multicolore fournit tous les types d'Énergie mais seulement 1 Énergie à la fois. (Elle n'a pas d'autre effet que de fournir de l'Énergie.) Lorsque vous attachez cette carte de votre main à 1 de vos Pokémon, placez 1 marqueur de dégât sur ce Pokémon.",
		de: "Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.) When you attach this card from your hand to 1 of your Pokémon, put 1 damage counter on that Pokémon."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 278542,
		tcgplayer: 88547
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		}
	]
}

export default card
