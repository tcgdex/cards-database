import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		de: "Trank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1).",
		fr: "Retirez jusqu'à deux marqueurs de dégât à l'un de vos Pokémon.",
		de: "Entferne 2 Schadensmarken von 1 deiner Pokémon (1 falls dieses nur 1 hat)."
	},

	thirdParty: {
		cardmarket: 275739,
		tcgplayer: 88330
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		}
	]
}

export default card
