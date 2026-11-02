import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Revitalizer",
		fr: "Revitalisation",
		de: "Revitalisierer"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Ajoutez 2 Pokémon Grass de votre pile de défausse à votre main.",
		en: "Put 2 Grass Pokémon from your discard pile into your hand.",
		de: "Nimm 2 {G}-Pokémon von deinem Ablagestapel auf deine Hand. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288411,
		tcgplayer: 113728
	}
}

export default card
