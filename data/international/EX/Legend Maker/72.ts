import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Cursed Stone",
		'fr-fr': "Pierre maléfique",
		'de-de': "Verfluchter Stein"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. At any time between turns, each player puts 1 damage counter on his or her Pokémon that has a Poké-Power.",
		'fr-fr': "N'importe quand entre deux tours, chaque joueur place 1 marqueur de dégât sur un de ses Pokémon possédant un Poké-Power.",
		'de-de': "Immer zwischen den Zügen legt jeder Spieler 1 Schadensmarke auf alle Pokémon, die eine Poké-Power haben.",
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
