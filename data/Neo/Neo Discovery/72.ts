import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Fossil Egg",
		fr: "Oeuf fossile",
		de: "Fossil-Ei"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck ou prenez dans votre main une carte Évolution de Mystérieux Fossile et placez-la sur votre Banc. Dans un cas ou l'autre, utilisez la nouvelle carte comme un Pokémon de base. Si vous avez cherché dans votre deck, mélangez-le. (Vous ne pouvez pas jouer cette carte si votre Banc est plein.)",
		de: "Flip a coin. If heads, either search your deck for a card that evolves from Mysterious Fossil and put it onto your Bench or put a card that evolves from Mysterious Fossil from your hand onto your Bench. Either way, treat the new card as a Basic Pokémon. If you searched your deck, shuffle it. (You can't play this card if your Bench is full.)"
	},

	thirdParty: {
		cardmarket: 274583,
		tcgplayer: 85555
	}
}

export default card
