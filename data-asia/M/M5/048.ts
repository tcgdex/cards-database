import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "バルジーナ",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "空から 地上を 観察して 弱った 獲物に 襲いかかる。 骨で 着飾る 習性。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ボーンスナイプ" },
			cost: ["Darkness"],
			effect: {
				ja: "特殊エネルギーがついている相手のポケモン1匹に、70ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ブラストウインド" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888303,
			},
		},
	],

	evolveFrom: {
		ja: "バルチャイ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [630],
};

export default card;
