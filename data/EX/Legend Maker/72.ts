import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Cursed Stone",
		fr: "Pierre maléfique",
		de: "Verfluchter Stein"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "N'importe quand entre deux tours, chaque joueur place 1 marqueur de dégât sur un de ses Pokémon possédant un Poké-Power.",
		de: "Immer zwischen den Zügen legt jeder Spieler 1 Schadensmarke auf alle Pokémon, die eine Poké-Power haben.",
	},

	thirdParty: {
		cardmarket: 276949,
		tcgplayer: 84538
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		},
		{
			type: "normal",
			stamp: ["miska-saari"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		}
	]
}

export default card
