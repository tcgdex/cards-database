import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティのstaryu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [120],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "スターブーメラン",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、MistyのStaryuとすべてのカードを手に返します。 （いずれにしても、この攻撃はその損傷をもたらします。）",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
