import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc ex",
		fr: "Lougaroc-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [745],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Lycanfang",
			fr: "LougaCroc"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			en: "Discard a {F} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {F} de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card