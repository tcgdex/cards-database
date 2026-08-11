import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "マフォクシーV",
		'zh-tw': "妖火紅狐V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "あやしいともしび",
				'zh-tw': "奇異燈火",
			},
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどとこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】與【混亂】。",
			},
		},
		{
			name: {
				ja: "マジカルファイヤー",
				'zh-tw': "魔法之火",
			},
			damage: 120,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個、ロストゾーンに置き、相手のベンチポケモン1匹にも、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "將這隻寶可夢身上附加的2個能量放置於放逐區，對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667892,
				tcgplayer: 569948,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [655],
};

export default card;
