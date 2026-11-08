import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヨルノズク",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "暗闇でも はっきり 見える 目を 持っており 獲物を 逃がさない。 闇夜の 帝王とも 呼ばれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "やみうち" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "ダメカンがのっている相手のポケモン1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "スラッシュクロー" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557240,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ホーホー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [164],
};

export default card;
