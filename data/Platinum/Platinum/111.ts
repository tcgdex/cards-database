import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Miasma Valley",
		fr: "Vallée miasme",
		de: "Gifthauchtal"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Whenever any player puts a Basic Pokémon (excluding  or  Pokémon) from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278532,
		tcgplayer: 87435
	}
}

export default card
