import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Fossil Egg",
		fr: "Oeuf fossile"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck ou prenez dans votre main une carte Évolution de Mystérieux Fossile et placez-la sur votre Banc. Dans un cas ou l'autre, utilisez la nouvelle carte comme un Pokémon de base. Si vous avez cherché dans votre deck, mélangez-le. (Vous ne pouvez pas jouer cette carte si votre Banc est plein.)"
	}
}

export default card
