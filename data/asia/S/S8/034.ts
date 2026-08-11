import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "パルスワンV",
		'zh-tw': "逐電犬V",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "スマッシュターン",
				'zh-tw': "粉碎迴轉",
			},
			damage: 30,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: {
				'ja-jp': "エレキバレット",
				'zh-tw': "電氣子彈",
			},
			damage: 120,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575589,
				tcgplayer: 569535,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [836],
};

export default card;
