import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "May",
		fr: "Flora"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		en: "Put 2 random Pokémon from your deck into your hand. For each Pokémon you put into your hand in this way, choose a Pokémon to shuffle from your hand into your deck.",
		fr: "Ajoutez au hasard 2 Pokémon de votre deck à votre main. Pour chaque carte Pokémon ajoutée de cette façon, choisissez un Pokémon dans votre main à mélanger avec votre deck."
	},

	trainerType: "Supporter",
	boosters: ["mega-blaziken"]
}

export default card