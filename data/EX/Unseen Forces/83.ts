import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Energy Root",
		fr: "Racine Énergie"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Racine Énergie à 1 de vos Pokémon (Pokémon-ex et Pokémon dont le nom comporte Obscur ou un nom de Dresseur exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Racine Énergie est attachée est un Pokémon-ex ou si son nom comporte Obscur ou un nom de Dresseur, défaussez Racine Énergie.\n\nTant que Racine Énergie est attachée à un Pokémon, ce Pokémon obtient 20 Points de vie supplémentaires et ne peut pas utiliser ses Poké-Powers ou Poké-Bodies."
	}
}

export default card
