import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Sitrus Berry",
		fr: "Baie Sitrus",
		de: "Tsitrubeere"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Baie Sitrus à 1 de vos Pokémon (Pokémon-ex et Pokémon dont le nom comporte Obscur ou un nom de Dresseur exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Baie Sitrus est attachée est un Pokémon-ex ou si son nom comporte Obscur ou un nom de Dresseur, défaussez Baie Sitrus.\n\nÀ la fin de chaque tour, si le Pokémon auquel cette carte est attachée possède au moins 3 marqueurs de dégât, retirez-lui 3 marqueurs de dégâts. Ensuite, défaussez Baie Sitrus.[1]",
		de: "At any time between turns, if the Pokémon this card is attached to has at least 3 damage counters on it, remove 3 damage counters from it. Then, discard Sitrus Berry."
	},

	thirdParty: {
		cardmarket: 276737,
		tcgplayer: 89231
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
