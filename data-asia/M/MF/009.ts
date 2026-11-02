import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ストリンダー",
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "淀んだ 水を ガブ飲みして 体内で 電気を 生みだすとき ベースのような ビートが 響く。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "マッハボルト" },
			damage: 80,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908371,
			},
		},
	],

	evolveFrom: {
		ja: "エレズン",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [849],
};

export default card;
