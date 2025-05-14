import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Darkrai ex",
		fr: "Darkrai-ex",
		es: "Darkrai ex",
		it: "Darkrai-ex",
		de: "Darkrai-ex",
		'pt-br': "Darkrai ex",
		ko: "다크라이 ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Nightmare Aura"
		},

		effect: {
			en: "Whenever you attach a <span class=\"energy-text energy-text--type-darkness\"></span> Energy from your Energy Zone to this Pokémon, do 20 damage to your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Dark Prism"
		},

		damage: 80,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card