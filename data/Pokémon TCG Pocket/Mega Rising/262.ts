import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Absol ex",
		fr: "Méga-Absol-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [359],
	hp: 170,
	types: ["Darkness"],

	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Darkness Claw",
			fr: "Griffe des Ténèbres"
		},

		damage: 80,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "Your opponent reveals their hand. Choose a Supporter card you find there and discard it.",
			fr: "Votre adversaire dévoile sa main. Choisissez une carte Supporter que vous y trouvez et défaussez-la."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card