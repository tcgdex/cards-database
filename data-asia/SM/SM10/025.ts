import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュゴン",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "８ノットの 速度で 海を 泳ぎ 獲物である ポケモンを 探す。 特に ヨワシが 大好物。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しっぽではたく" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "デュアルブリザード" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個トラッシュし、相手のポケモン2匹に、それぞれ60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557380,
			},
		},
	],

	evolveFrom: {
		ja: "パウワウ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [87],
};

export default card;
