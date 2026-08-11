import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Leftovers",
		fr: "Restes",
		de: "Überreste"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Leftovers to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. If the Pokémon Leftovers is attached to is your Active Pokémon at the end of your turn, remove 1 damage counter from the Pokémon.",
		fr: "Attachez Pièce rune à 1 de vos Pokémon qui ne posséde pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.",
		de: "Wenn das Pokémon, an das Überreste angelegt ist, am Ende deines Zuges dein Aktives Pokémon ist, entferne 1 Schadensmarke von diesem Pokémon."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278001,
		tcgplayer: 86708
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
