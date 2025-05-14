import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Dialga ex",
		fr: "Dialga-ex",
		es: "Dialga ex",
		it: "Dialga-ex",
		de: "Dialga-ex",
		'pt-br': "Dialga ex",
		ko: "디아루가 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Metallic Turbo"
		},

		damage: 30,
		cost: ["Metal", "Metal"],

		effect: {
			en: "Take 2 <span class=\"energy-text energy-text--type-metal\"></span> Energy from your Energy Zone and attach it to 1 of your Benched Pokémon."
		}
	}, {
		name: {
			en: "Heavy Impact"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card