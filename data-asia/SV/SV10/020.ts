import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "バシャーモ",
		'zh-tw': "火焰雞",
		'zh-cn': "火焰雞",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		ja: "強敵に 出会うと 手首から 炎を 噴き出す。 ジャンプで ビルを 跳び越す 脚力。",
		'zh-tw': "遇到強敵時會從手腕噴出火焰。 有著能夠躍過大樓的腳力。",
		'zh-cn': "遇到強敵時會從手腕噴出火焰。 有著能夠躍過大樓的腳力。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ヒートブラスト",
				'zh-tw': "高溫爆破",
				'zh-cn': "高溫爆破",
			},
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ごうかれんきゃく",
				'zh-tw': "業火連踢",
				'zh-cn': "業火連踢",
			},
			damage: 120,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個トラッシュし、相手のベンチポケモン1匹にも、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "將2個這隻寶可夢身上附加的能量丟棄，對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
				'zh-cn': "將2個這隻寶可夢身上附加的能量丟棄，對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821851,
				tcgplayer: 628661,
			},
		},
	],

	evolveFrom: {
		ja: "ワカシャモ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [257],
};

export default card;
