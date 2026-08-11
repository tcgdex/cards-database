import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エルレイド",
		'zh-tw': "艾路雷朵",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	description: {
		'ja-jp': "助けを 求める 感情を 敏感に キャッチ。 相手の もとへ 馳せ参じ 加勢するぞ。",
		'zh-tw': "能夠敏銳地感知到尋求幫助的感情，並且火速趕去援助對方。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "フェイント",
				'zh-tw': "佯攻",
			},
			damage: 60,
			cost: ["Psychic"],
			effect: {
				'ja-jp': "このワザのダメージは抵抗力を計算しない。",
				'zh-tw': "這個招式的傷害不計算抵抗力。",
			},
		},
		{
			name: {
				'ja-jp': "ダイナブレード",
				'zh-tw': "力之利刃",
			},
			damage: "60×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の場の「ポケモンV」の数×60ダメージ。",
				'zh-tw': "造成對手的場上的「寶可夢【V】」的數量×60點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586601,
				tcgplayer: 571338,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578395,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "キルリア",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [475],
};

export default card;
