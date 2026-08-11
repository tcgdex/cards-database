import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Kingdra ex",
		fr: "Hyporoi-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [230],
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Seadra"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Stormy Prison",
			fr: "Prison Tempétueuse"
		},

		damage: 90,
		cost: ["Water", "Water"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card