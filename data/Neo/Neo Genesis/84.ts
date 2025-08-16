import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Ecogym",
		fr: "Ecostade",
		de: "Ecogym*"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez cette carte si une autre carte Stade arrive en jeu.\n\nÀ chaque fois qu'une attaque, un Pouvoir Pokémon ou une carte Dresseur fait défausser une carte Énergie non- d'un autre joueur d'un Pokémon, retournez cette carte Énergie dans la main de son propriétaire. (Les cartes Énergie qui sont défaussées lorsque ce Pokémon est mis K.O. ne comptent pas.)",
		de: "Whenever an attack, Pokémon Power, or Trainer card discards another player's non- Energy card from a Pokémon, return that Energy card to its owner's hand. (Energy cards that are discarded when that Pokémon is Knocked Out don't count.)"
	},

	thirdParty: {
		cardmarket: 274484,
		tcgplayer: 85066
	}
}

export default card
