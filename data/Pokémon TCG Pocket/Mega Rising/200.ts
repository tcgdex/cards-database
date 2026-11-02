import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Watchog",
		fr: "Miradar"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [505],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif"
	},

	description: {
		en: "When they see an enemy, their tails stand high,\nand they spit the seeds of berries stored in their\ncheek pouches."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Biting Fang",
			fr: "Croc Mordant"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card