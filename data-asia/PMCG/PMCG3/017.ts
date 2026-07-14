import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		// Tentacruel
		ja: "ドククラゲ",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [73],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "超音速",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},

		},
		{
			cost: ["Water", "Water"],
			name: {
				ja: "クラゲの刺し傷",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575710
			},
		},
	],
};

export default card
