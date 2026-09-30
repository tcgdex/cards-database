import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon"
	},

	illustrator: "LINNE",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It lives close to water. Its long tail is ridged with\na fin, which is often mistaken for a mermaid's."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wash Out"
		},

		effect: {
			en: "As often as you like during your turn, you may move a {W} Energy from 1 of your Benched {W} Pokémon to your Active {W} Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Wave Splash"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card