import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Moonlight Stadium",
		fr: "Stade clair de lune",
		de: "Mondscheinstadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Jedes - und jedes -Pokémon im Spiel (deine und die deines Gegners) hat Rückzugskosten 0."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278002,
		tcgplayer: 87579
	}
}

export default card
