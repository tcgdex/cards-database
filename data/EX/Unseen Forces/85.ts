import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Fluffy Berry",
		fr: "Baie Molletonnée",
		de: "Fluffige Beere"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Fluffy Berry to 1 of your Pokémon (excluding Pokémon-ex and Pokémon that has Dark or an owner in its name) that doesn't already have a Pokémon Tool attached to it. If the Pokémon Fluffy Berry is attached to is Pokémon-ex or has Dark or an owner in its name, discard Fluffy Berry. As long as Fluffy Berry is attached to a Pokémon, that Pokémon's Retreat Cost is 0.",
		fr: "Attachez Baie Molletonnée à 1 de vos Pokémon (Pokémon-ex et Pokémon dont le nom comporte Obscur ou un nom de Dresseur exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Baie Molletonnée est attachée est un Pokémon-ex ou si son nom comporte Obscur ou un nom de Dresseur, défaussez Baie Molletonnée.\n\nTant que Baie Molletonnée est attachée à un Pokémon, le Coût de retraite de ce Pokémon est de 0.",
		de: "As long as Fluffy Berry is attached to a Pokémon, that Pokémon's Retreat Cost is 0."
	},

	thirdParty: {
		cardmarket: 276731,
		tcgplayer: 85520
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
