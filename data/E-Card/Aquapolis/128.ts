import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Memory Berry",
		fr: "Baie de mémoire",
		de: "Memory Berry*"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Baie de mémoire à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui. Si ce Pokémon est mis K.O., défaussez-vous de cette carte.\n\nLe Pokémon auquel cette carte est attachée peut utiliser n'importe quelle attaque de la carte Pokémon de base ou de la carte Évolution dont ce Pokémon a évolué. (You still have to pay for that attack's Energy cost.) Discard this card at the end of any turn the Pokémon attacks.",
		de: "The Pokémon this card is attached to can use any attack from its Basic Pokémon card or any Evolution card from which the Pokémon evolved. (You still have to pay for that attack´s Energy cost.) Discard this card at the end of any turn the Pokémon attacks."
	},

	thirdParty: {
		cardmarket: 275204,
		tcgplayer: 87307
	}
}

export default card
