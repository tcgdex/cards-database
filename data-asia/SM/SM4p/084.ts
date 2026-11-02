import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザ",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "雲より はるか上の オゾン層に 生息しているため 地上から 姿を 見ることは できない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ターボストーム" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを2枚、自分のベンチポケモン1匹につける。",
			},
		},
		{
			name: { ja: "ドラゴンクロー" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560117,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [384],
};

export default card;
