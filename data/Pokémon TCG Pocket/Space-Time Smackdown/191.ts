import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Team Galactic Grunt"
	},

	illustrator: "GOSSAN",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		en: "Put 1 random <a class=\"localized-string__link\" href=\"/pokemon/glameow/\">Glameow</a>, <a class=\"localized-string__link\" href=\"/pokemon/stunky/\">Stunky</a>, or <a class=\"localized-string__link\" href=\"/pokemon/croagunk/\">Croagunk</a> from your deck into your hand."
	},

	trainerType: "Supporter",
		
	boosters: [Dialga]
}

export default card