import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "エルレイド",
		'zh-tw': "艾路雷朵",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	description: {
		ja: "助けを 求める 感情を 敏感に キャッチ。 相手の もとへ 馳せ参じ 加勢するぞ。",
		'zh-tw': "能夠敏銳地感知到尋求幫助的感情，並且火速趕去援助對方。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "フェイント" },
			damage: 60,
			cost: ["Psychic"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "ダイナブレード" },
			damage: "60×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の場の「ポケモンV」の数×60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560456,
				tcgplayer: 569172,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [475],
};

export default card;
