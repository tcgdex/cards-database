import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Eevee"
	},


	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Bubble Drain"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid's.",
	}
}

export default card
