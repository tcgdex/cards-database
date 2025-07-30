import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Super Rod",
		fr: "Méga Canne",
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez une combinaison de 3 cartes de Pokémon et d'Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281020,
		tcgplayer: 89632
	}
}

export default card
