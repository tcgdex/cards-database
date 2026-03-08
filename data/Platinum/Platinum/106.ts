import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Galactic HQ",
		fr: "QG Galaxie",
		de: "Galaktik-Zentrale"
	},

	illustrator: "Ryota Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lorsqu'1 des joueurs joue un Pokémon de sa main pour faire évoluer son Pokémon, placez 2 marqueurs de dégât sur ce Pokémon.",
		de: "Whenever any player plays any Pokémon from his or her hand to evolve his or her Pokémon, put 2 damage counters on that Pokémon."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278527,
		tcgplayer: 85603
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"]
		}
	]
}

export default card
