import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Card-Flip Game",
		fr: "Jeu de chance"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 des récompenses de votre adversaire qui est face cachée. Devinez si c'est une carte Énergie, une carte Dresseur ou une carte Pokémon (de base ou Évolution). Retournez la carte (et laissez-la découverte). Si vous avez deviné juste, piochez 2 cartes."
	}
}

export default card
