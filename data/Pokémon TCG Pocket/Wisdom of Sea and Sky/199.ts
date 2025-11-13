import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Fisher",
		fr: "Pêcheur"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		en: "Flip 3 coins. For each heads, a {W} Pokémon is chosen at random from your discard pile and put into your hand.",
		fr: "Lancez 3 pièces. Pour chaque côté face, un Pokémon {W} est choisi au hasard dans votre pile de défausse et ajouté à votre main."
	},

	trainerType: "Supporter",
	boosters: ["lugia"]
}

export default card