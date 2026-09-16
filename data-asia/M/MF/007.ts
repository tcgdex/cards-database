import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼラオラ",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "雷に 匹敵する スピードで 走り 大電圧を 発する ツメで 敵を 八つ裂きにする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クイックドロー" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "エレキバレット" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908369,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [807],
};

export default card;
