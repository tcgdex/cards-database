import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Zygarde ex",
		fr: "Mega Zygarde-ex",
		es: "Mega Zygarde ex",
		'es-mx': "Mega Zygarde ex",
		de: "Mega-Zygarde-ex",
		it: "Mega Zygarde-ex",
		pt: "Mega Zygarde ex"
	},

	suffix: "ex",
	illustrator: "takuyoa",
	rarity: "None",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [718],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Gaia Wave"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		},

		damage: 200
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Fighting", "Fighting"],

		name: {
			en: "Nullifying Zero"
		},

		effect: {
			en: "For each of your opponent's Pokémon, flip a coin. If heads, this attack does 150 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 695311
			}
		}
	]
}

export default card
