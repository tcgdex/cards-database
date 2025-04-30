import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Palossand"
	},

	illustrator: "OOYAMA",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Sandygast"
	},

	description: {
		en: "The terrifying Palossand drags smaller Pokémon into its sandy body. Once its victims are trapped, it drains them of their vitality whenever it pleases."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spooky Shot"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3
}

export default card