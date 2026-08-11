import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "カメール",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "ポカンと 頭を たたかれるとき 甲羅に 引っこんで 避ける。 でも ちょっとだけ 尻尾が 出ているよ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "たきのぼり" },
			damage: 70,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558300,
			},
		},
	],

	evolveFrom: {
		ja: "ゼニガメ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [8],
};

export default card;
