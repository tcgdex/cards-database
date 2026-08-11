import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ネイティ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "まだ 飛べないが ジャンプ力は 抜群。 高い 木の 枝に 飛び上がり 木の芽を ついばむ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みらいよち" },
			cost: ["Psychic"],
			effect: {
				ja: "自分または相手の山札を上から4枚見て、好きな順番に入れ替えて、山札の上にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555174,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [177],
};

export default card;
