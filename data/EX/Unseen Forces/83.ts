import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Energy Root",
		fr: "Racine Énergie",
		de: "Energiewurzel"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Racine Énergie à 1 de vos Pokémon (Pokémon-ex et Pokémon dont le nom comporte Obscur ou un nom de Dresseur exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Racine Énergie est attachée est un Pokémon-ex ou si son nom comporte Obscur ou un nom de Dresseur, défaussez Racine Énergie.\n\nTant que Racine Énergie est attachée à un Pokémon, ce Pokémon obtient 20 Points de vie supplémentaires et ne peut pas utiliser ses Poké-Powers ou Poké-Bodies.",
		de: "As long as Energy Root is attached to a Pokémon, that Pokémon gets +20 HP and can't use any Poké-Powers or Poké-Bodies."
	},

	thirdParty: {
		cardmarket: 276729,
		tcgplayer: 85235
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["miska-saari"]
		}
	]
}

export default card
