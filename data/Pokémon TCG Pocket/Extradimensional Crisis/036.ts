import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Palossand"
	},

	illustrator: "Hasuno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Sandygast"
	},

	description: {
		en: "The terrifying Palossand drags smaller Pokémon<br />into its sandy body. Once its victims are trapped,<br />it drains them of their vitality whenever it pleases."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sand Tomb"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card