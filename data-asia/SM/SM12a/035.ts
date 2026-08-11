import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホワイトキュレム",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "強力な 冷凍エネルギーを 体内で 作り出すが 漏れ出した 冷気で 体が 凍っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フィールドクラッシュ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "場に出ている相手のスタジアムをトラッシュする。",
			},
		},
		{
			name: { ja: "いてつくほのお" },
			damage: "80+",
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンに[炎]エネルギーがついているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543566,
			},
		},
	],

	retreat: 3,
	regulationMark: "B",
	rarity: "None",
	dexId: [646],
};

export default card;
