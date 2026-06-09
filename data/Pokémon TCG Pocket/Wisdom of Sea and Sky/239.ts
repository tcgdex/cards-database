import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Lickilicky ex",
		fr: "Coudlangue-ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [463],
	hp: 160,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lickitung"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Licking Fury",
			fr: "Langue Frénétique"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["ho-oh"]
}

export default card