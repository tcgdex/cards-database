import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Applin",
		fr: "Verpom"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [840],
	hp: 40,
	types: ["Grass"],

	description: {
		en: "It grows by eating the flesh of an apple.\nApplin uses its own body fluid to strengthen\nthe apple's skin and prevent it from rotting.",
		fr: "Il grandit en mangeant la chair d'une pomme. Grâce à une substance qu'il sécrète, il solidifie la peau de cette pomme et l'empêche de pourrir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card