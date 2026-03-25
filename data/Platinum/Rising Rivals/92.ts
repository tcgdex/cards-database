import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Lucian's Assignment",
		fr: "La mission de Lucio",
		de: "Lucians Auftrag"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Déplacez autant de cartes Énergie attachées à 1 de vos Pokémon que vous le voulez sur un autre de vos Pokémon.",
		de: "Entferne eine beliebige Anzahl Energiekarten von 1 deiner Pokémon und lege sie an 1 anderes deiner Pokémon an.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278666,
		tcgplayer: 86891
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "league"
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"]
		}
	]
}

export default card
