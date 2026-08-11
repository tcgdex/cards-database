import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンカラス",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "獲物を 捕るのを 失敗したり 裏切った 子分の ヤミカラスを どこまでも 追い詰め 処分する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スナッチターン" },
			cost: ["Darkness"],
			effect: {
				ja: "相手の手札からオモテを見ないで、1枚トラッシュする。このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "スピードひこう" },
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559980,
			},
		},
	],

	evolveFrom: {
		ja: "ヤミカラス",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [430],
};

export default card;
