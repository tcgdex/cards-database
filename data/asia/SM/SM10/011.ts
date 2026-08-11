import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒヒダルマ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "激しい 戦いで 傷つくと 岩のように 固まり 黙考して 心を 研ぎ澄ませるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おにびさがし" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札にある[炎]エネルギーを3枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "フレアドライブ" },
			damage: 110,
			cost: ["Fire", "Fire"],
			effect: {
				'ja-jp': "このポケモンについている[炎]エネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557366,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ダルマッカ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [555],
};

export default card;
