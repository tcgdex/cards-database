import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Amulet Coin",
		fr: "Pièce rune",
		de: "Münzamulett"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Amulet Coin to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. If the Pokémon Amulet Coin is attached to is your Active Pokémon at the end of your turn, draw a card.",
		fr: "Attachez Pièce rune à 1 de vos Pokémon qui ne posséde pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.",
		de: "Wenn das Pokémon, an das Münzamulett angelegt ist, am Ende deines Zuges dein Aktives Pokémon ist, ziehe 1 Karte."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 277999,
		tcgplayer: 83551
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
