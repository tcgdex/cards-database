import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドリュウズ",
		'zh-tw': "龍頭地鼠",
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'ja-jp': "別名 ドリルキング。 地中を 掘り進む 速度は 時速１５０キロに 達する。",
		'zh-tw': "別名鑽頭王。在地底下挖掘前進的速度高達每小時１５０公里。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "メタルクロー",
				'zh-tw': "金屬爪",
			},
			damage: 50,
			cost: ["Metal", "Colorless"],
		},
		{
			name: {
				'ja-jp': "がんせきふうじ",
				'zh-tw': "岩石封鎖",
			},
			damage: 120,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575622,
				tcgplayer: 569568,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モグリュー",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [530],
};

export default card;
