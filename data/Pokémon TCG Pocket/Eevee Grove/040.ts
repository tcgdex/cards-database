import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Mienfoo",
		fr: "Kungfouine"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "In one minute, a well-trained Mienfoo can chop\nwith its arms more than 100 times.",
		fr: "Les Kungfouine bien entraînés sont capables d'asséner plus de cent coups par minute du tranchant de la main."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Kick Shot",
			fr: "Coup d'Ergots"
		},

		damage: 40,
		cost: ["Fighting"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card