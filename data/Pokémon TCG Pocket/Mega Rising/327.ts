import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Bibarel ex",
		fr: "Castorno-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [400],
	hp: 160,
	types: ["Colorless"],

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Carefree Press",
			fr: "Pression Insouciante"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["mega-altaria"]
}

export default card