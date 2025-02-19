import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid's."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wash Out"
		},

		effect: {
			en: "As often as you like during your turn, you may move a <span class=\"energy-text energy-text--type-water\"></span> Energy from 1 of your Benched <span class=\"energy-text energy-text--type-water\"></span> Pokémon to your Active <span class=\"energy-text energy-text--type-water\"></span> Pokémon."
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

	retreat: 2,
	rarity: "One Star"
}

export default card
