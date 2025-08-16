import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Bench Shield",
		de: "Bank-Schutzschild"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Bench Shield to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it.\nIf that Pokémon is Knocked Out, discard this card.",
		de: "Solange sich das Pokémon, an das diese Karte angelegt ist, auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Angriffe (deine und die deines Gegners) zugefügt würde."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278955,
		tcgplayer: 83811
	}
}

export default card
