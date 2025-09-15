import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Meditite",
		fr: "Méditikka"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It never skips its daily yoga training. It heightens\nits inner strength through meditation.",
		fr: "Méditikka ne rate jamais une séance de yoga. Il augmente sa force intérieure par la méditation."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Trip Over",
			fr: "Croche-Pied"
		},

		damage: 10,
		cost: ["Fighting"],

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card