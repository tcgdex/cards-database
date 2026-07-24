import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバーン",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "今でも 金属を 加工するのに ブーバーンの 炎に 頼っている 工場も 少なくないのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "えんばく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			},
		},
		{
			name: { ja: "かえんほうしゃ" },
			damage: 120,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557280,
			},
		},
	],

	evolveFrom: {
		ja: "ブーバー",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [467],
};

export default card;
