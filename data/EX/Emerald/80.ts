import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Oran Berry",
		fr: "Baie Oran",
		de: "Oran Berry*"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Baie Oran à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez-la.\n\nN'importe quand entre deux tours, si le Pokémon auquel cette carte est attachée possède au moins deux marqueurs de dégât, retirez-les lui. Ensuite, défaussez Baie Oran.",
		de: "At any time between turns,if the Pokémon this card is attached to has at least 2 damage counters on it, remove 2 damage counters from it.Then, discard Oran Berry."
	},

	thirdParty: {
		tcgplayer: 87889,
		cardmarket: 276591
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
