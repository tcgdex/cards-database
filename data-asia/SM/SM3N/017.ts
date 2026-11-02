import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "シビルドン",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "吸盤の 口で 獲物に 吸いつき 食いこませた キバから 電気を 流して 感電させる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "くらいつく" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "バキュームボルト" },
			damage: "80+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "のぞむなら、80ダメージ追加。その場合、自分のポケモン1匹にも、80ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561017,
			},
		},
	],

	evolveFrom: {
		ja: "シビビール",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [604],
};

export default card;
