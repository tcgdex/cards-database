import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Lum Berry",
		fr: "Baie Prine",
		de: "Prunusbeere"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Baie Prine à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez-la.\n\nÀ la fin de chaque tour, si le Pokémon auquel cette carte est attachée possède des États Spéciaux, retirez-les lui tous. Ensuite, défaussez Baie Prine.[1]",
		de: "At any time between turns, if the Pokémon this card is attached to is affected by any Special Conditions, remove all of them. Then, discard Lum Berry."
	}
}

export default card
