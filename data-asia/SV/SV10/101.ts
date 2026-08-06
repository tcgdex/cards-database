import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "バシャーモ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		ja: "強敵に 出会うと 手首から 炎を 噴き出す。 ジャンプで ビルを 跳び越す 脚力。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ヒートブラスト" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ごうかれんきゃく" },
			damage: 120,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個トラッシュし、相手のベンチポケモン1匹にも、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821933,
				tcgplayer: 629042,
			},
		},
	],

	evolveFrom: {
		ja: "ワカシャモ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [257],
};

export default card;
