import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Snowpoint Temple",
		fr: "Temple Frimapic",
		de: "Blizzach-Tempel"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Jedes Pokémon im Spiel (deine und die deines Gegners), das kein entwickeltes Pokémon ist, erhält +20 KP."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278283,
		tcgplayer: 89410
	}
}

export default card
