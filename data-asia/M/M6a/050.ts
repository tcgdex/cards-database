import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロム",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "稲妻で 世界を 焼きつくせる 伝説の ポケモン。理想の 世界を つくる 人を 補佐する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
		},
		{
			name: { ja: "ニトロサンダー" },
			damage: "80+",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに[R]エネルギーがついているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908228,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [644],
};

export default card;
