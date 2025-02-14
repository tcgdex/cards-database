import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Cynthia"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		en: "During this turn, attacks used by your <a class=\"localized-string__link\" href=\"/pokemon/garchomp/\">Garchomp</a> or <a class=\"localized-string__link\" href=\"/pokemon/togekiss/\">Togekiss</a> do +50 damage to your opponent's Active Pokémon."
	},

	trainerType: "Supporter",
		
	boosters: [Palkia]
}

export default card