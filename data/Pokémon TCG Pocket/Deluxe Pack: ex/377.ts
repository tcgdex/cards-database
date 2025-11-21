import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Giratina ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Broken-Space Bellow"
		},

		effect: {
			en: "Once during your turn, you may take a {P} Energy from your Energy Zone and attach it to this Pokémon. If you use this Ability, your turn ends."
		}
	}],

	attacks: [{
		name: {
			en: "Chaotic Impact"
		},

		damage: 130,
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card