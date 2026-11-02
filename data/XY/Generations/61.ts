import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie",
		de: "Energie-Umschalter"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Déplacez une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
		en: "Move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
		de: "Verschiebe 1 an 1 deiner Pokémon angelegte Basis-Energie auf ein anderes deiner Pokémon. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288498,
		tcgplayer: 113719
	}
}

export default card
