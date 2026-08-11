import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユキワラシ",
		'zh-tw': "雪童子",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "寒い 土地でしか 生きられない。 マイナス １００度の 環境でも 元気に 跳ねまわっているよ。",
		'zh-tw': "只能在寒冷的土地上生存。即使在零下１００度的環境下也能充滿活力地到處蹦蹦跳跳。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "こおりのいき",
				'zh-tw': "冰之氣息",
			},
			cost: ["Water"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
		{
			name: {
				'ja-jp': "スノーアイス",
				'zh-tw': "雪花冰",
			},
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586550,
				tcgplayer: 571287,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578373,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [361],
};

export default card;
