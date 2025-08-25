import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Focus Band",
		fr: "Bandeau",
		de: "Focus Band*"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Bandeau de concentration à 1 de vos Pokémon qui n'a pas d'Outil Pokémon attaché sur lui.\n\nSi le Pokémon auquel est attaché Bandeau de concentration est mis K.O. par l'attaque de votre adversaire, lancez une pièce. Si c'est face, ce Pokémon n'est pas K.O. et il lui reste 10 PV. Ensuite, défaussez Bandeau de concentration.",
		de: "If the Pokémon Focus Band is attached to would be Knocked Out by your opponent's attack, flip a coin. If heads, that Pokémon is now Knocked Out and its remaining HP become 10 instead. Then, discard Focus Band."
	},

	thirdParty: {
		cardmarket: 274486,
		tcgplayer: 85536
	}
}

export default card
