import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fisher",
		'fr-fr': "Pêcheur"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Flip 3 coins. For each heads, a {W} Pokémon is chosen at random from your discard pile and put into your hand.",
		'fr-fr': "Lancez 3 pièces. Pour chaque côté face, un Pokémon {W} est choisi au hasard dans votre pile de défausse et ajouté à votre main."
	},

	trainerType: "Supporter",
	boosters: ["lugia"]
}

export default card