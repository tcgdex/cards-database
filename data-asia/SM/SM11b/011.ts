import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "エンペルト",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "ジェットスキーに 負けない 速度で 泳ぐ。翼の 縁は 鋭く 流氷を 切断する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "おもいだす" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンが進化前に持っていたワザを1つ選び、このワザとして使う。",
			},
		},
		{
			name: { ja: "アクアフォール" },
			damage: 130,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555143,
			},
		},
	],

	evolveFrom: {
		ja: "ポッタイシ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [395],
};

export default card;
