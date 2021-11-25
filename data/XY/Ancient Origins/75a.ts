import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Hex Maniac",
		fr: "Mystimaniac"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "Until the end of your opponent's next turn, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities. (This includes cards that come into play on that turn.)",
		fr: "Jusqu'à la fin du prochain tour de votre adversaire, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent. (Cela comprend les cartes qui sont en jeu pendant ce tour.)"
	}
}

export default card
