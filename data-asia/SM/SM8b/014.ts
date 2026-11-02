import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "バシャーモ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "強敵に 出会うと 手首から 炎を 噴き出す。 ジャンプで ビルを 跳び越す 脚力。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "たきつける" },
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュにある[炎]エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ファイヤーストリーム" },
			damage: 90,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[炎]エネルギーを1個トラッシュし、相手のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550556,
			},
		},
	],

	evolveFrom: {
		ja: "ワカシャモ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [257],
};

export default card;
