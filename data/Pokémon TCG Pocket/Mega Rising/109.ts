import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Chingling",
		fr: "Korillon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [433],
	hp: 30,
	types: ["Psychic"],

	description: {
		en: "There is an orb inside its mouth. When it hops,\nthe orb bounces all over and makes a\nringing sound."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Jingly Noise",
			fr: "Tintement"
		},

		damage: 10,

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card