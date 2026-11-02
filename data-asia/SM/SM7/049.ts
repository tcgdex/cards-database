import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "レジロック",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "体を 作っている 岩石と 同じ 物が 世界中の あらゆる 地層で 見つかっている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きょうかスタンプ" },
			damage: "20+",
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、20ダメージ追加。",
			},
		},
		{
			name: { ja: "アームハンマー" },
			damage: 100,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559010,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [377],
};

export default card;
