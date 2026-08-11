import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エレザード",
		'zh-tw': "光電傘蜥",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'ja-jp': "襟巻を 広げて 太陽光を 浴びると 大都会で 使われる 電気を １匹で 発電する。",
		'zh-tw': "如果展開頸傘沐浴陽光，單憑１隻光電傘蜥就能製造出大城市所需的電力。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "かじる",
				'zh-tw': "咬",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "エレキバレット",
				'zh-tw': "電氣子彈",
			},
			damage: 60,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575586,
				tcgplayer: 569532,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "エリキテル",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [695],
};

export default card;
