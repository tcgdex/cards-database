import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Balloon Berry",
		fr: "Baie Ballon",
		de: "Balloon Berry*"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Balloon Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as Balloon Berry is attached to a Pokémon, that Pokémon's Retreat Cost is 0. When this Pokémon retreats, discard Balloon Berry.",
		fr: "Attachez Baie Ballon à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez-la.\n\nTant que Baie Ballon est attachée à un Pokémon, le Coût de retraite de ce Pokémon est de 0. Lorsqu'il bat en retraite, défaussez-la.",
		de: "When the Pokémon Balloon Berry is attached to retreats, discard Balloon Berry instead of discarding Energy cards."
	},

	thirdParty: {
		tcgplayer: 83706,
		cardmarket: 276487
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
