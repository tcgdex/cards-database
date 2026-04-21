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
		fr: "Chaque Pokémon en jeu qui n'est pas un Pokémon Évolué (parmi les vôtres et ceux de votre adversaire) obtient + 20 PV.",
		de: "Jedes Pokémon im Spiel (deine und die deines Gegners), das kein entwickeltes Pokémon ist, erhält +20 KP.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278283,
		tcgplayer: 89410
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
