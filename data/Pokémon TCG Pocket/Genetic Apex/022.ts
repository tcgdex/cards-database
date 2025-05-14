import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor",
		fr: "Noadkoko"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Stomp",
			fr: "Écrasement"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus."
		},

		damage: "30+"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "Each of Exeggutor's three heads is thinking different thoughts. The three don't seem to be very interested in one another.",
		fr: "Chacune de ses trois têtes pense de manière autonome. Elles ne semblent s'intéresser qu'à elles-mêmes."
	}
}

export default card
