import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バンギラスV",
		'zh-tw': "班基拉斯V",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "やまなだれ",
				'zh-tw': "山崩",
			},
			damage: 60,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の山札を上から2枚トラッシュする。",
				'zh-tw': "將對手的牌庫上方2張卡丟棄。",
			},
		},
		{
			name: {
				'ja-jp': "いちげきクラッシュ",
				'zh-tw': "一擊粉碎",
			},
			damage: 240,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を上から4枚トラッシュする。",
				'zh-tw': "將自己的牌庫上方4張卡丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 533452,
				tcgplayer: 568995,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [248],
};

export default card;
