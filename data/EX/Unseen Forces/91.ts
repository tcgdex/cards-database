import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Sitrus Berry",
		fr: "Baie Sitrus"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Baie Sitrus à 1 de vos Pokémon (Pokémon-ex et Pokémon dont le nom comporte Obscur ou un nom de Dresseur exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Baie Sitrus est attachée est un Pokémon-ex ou si son nom comporte Obscur ou un nom de Dresseur, défaussez Baie Sitrus.\n\nÀ la fin de chaque tour, si le Pokémon auquel cette carte est attachée possède au moins 3 marqueurs de dégât, retirez-lui 3 marqueurs de dégâts. Ensuite, défaussez Baie Sitrus.[1]"
	}
}

export default card
