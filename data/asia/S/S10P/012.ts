import { Card } from "models/database/card";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギャロップ",
		'zh-tw': "烈焰馬",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'ja-jp': "燃える たてがみを はためかせ 時速 ２４０キロの 速度で 大草原を 駆けぬけるのだ。",
		'zh-tw': "任由燃燒的鬃毛隨風飄揚，以每小時２４０公里的速度 在大草原上自在奔馳。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "かえん",
				'zh-tw': "烈焰",
			},
			damage: 30,
			cost: ["Fire"],
		},
		{
			name: {
				'ja-jp': "フレイムサークル",
				'zh-tw': "火焰陣",
			},
			damage: 50,
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651071,
				tcgplayer: 569855,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ポニータ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [78],
};

export default card;
