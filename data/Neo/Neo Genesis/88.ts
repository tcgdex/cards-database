import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "PokéGear",
		fr: "Pokéquipement"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 7 cartes du dessus de votre deck. Si une ou plusieurs d'entre elles sont des cartes Dresseur, vous pouvez montrer l'une d'elles à votre adversaire et la placer dans votre main. Mélangez ensuite votre deck. Vous ne pouvez plus jouer de carte Dresseur pendant ce tour."
	}
}

export default card
