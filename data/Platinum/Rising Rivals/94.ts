import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Sunyshore City Gym",
		fr: "Le gymnase de Rivamar City",
		de: "Sonnewik-Arena"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Schaden, der den Verteidigenden Pokémon durch -Pokémon (deinen und denen deines Gegners) zugefügt wird, wird durch Resistenz nicht verändert. Alle -Pokémon im Spiel (deine und die deines Gegners) haben keine Schwäche."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278668
	}
}

export default card
