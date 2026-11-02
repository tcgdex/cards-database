import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "プクリン",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Fairy"],

	description: {
		ja: "息を 吸って どんどん 膨らむ。 プクリン同士は どっちが 大きく 膨らめるか 勝負 するよ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふくらむ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "デコレートビンタ" },
			damage: "70+",
			cost: ["Fairy", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに、名前に「フェアリーチャーム」とつく「ポケモンのどうぐ」がついているなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558852,
			},
		},
	],

	evolveFrom: {
		ja: "プリン",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [40],
};

export default card;
