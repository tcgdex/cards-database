import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユキワラシ",
		'zh-tw': "美錄梅塔V",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "寒い 土地でしか 生きられない。 マイナス １００度の 環境でも 元気に 跳ねまわっているよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ずつき",
				'zh-tw': "臂充能",
			},
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 570873,
				tcgplayer: 597375,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [361],
};

export default card;
