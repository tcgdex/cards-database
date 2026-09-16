import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Hakamo-o"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [783],
	hp: 90,
	types: ["Dragon"],
	stage: "Stage1",

	description: {
		en: "It fires itself up by striking its scales with force as it dances. Its roar is a battle cry."
	},

	attacks: [{
		name: {
			en: "Sharp Fang"
		},

		cost: ["Colorless"],

		damage: 20,
	}, {
		name: {
			en: "Dragon Claw"
		},

		cost: ["Lightning", "Fighting"],

		damage: 70,
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907718,
				tcgplayer: 716504
			}
		}
	],
}

export default card
