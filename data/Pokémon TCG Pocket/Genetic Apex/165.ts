import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Arbok"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Corner"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
		es: "Ekans",
		it: "Ekans",
		pt: "Ekans",
		de: "Rettan"
	}
}

export default card
