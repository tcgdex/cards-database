import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Lum Berry",
		fr: "Baie Prine"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Baie Prine à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez-la.\n\nÀ la fin de chaque tour, si le Pokémon auquel cette carte est attachée possède des États Spéciaux, retirez-les lui tous. Ensuite, défaussez Baie Prine.[1]"
	}
}

export default card
