import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ",
		'zh-tw': "水伊布VMAX",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "熱いものを 好む 性格。 雨に濡れると しっぽの 先から 煙が 出るという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "もってくる",
				'zh-tw': "泡沫艙",
			},
			cost: ["Fire"],
			effect: {
				ja: "自分の山札を1枚引く。",
				'zh-tw': "從自己的棄牌區選擇1張【水】寶可夢卡，放置於備戰區。然後，從自己的棄牌區選擇最多3張【水】能量卡，附於剛放置的寶可夢身上。",
			},
		},
		{
			name: {
				ja: "ほのお",
				'zh-tw': "極巨激流",
			},
			damage: 30,
			cost: ["Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525245,
				tcgplayer: 597313,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [4],
};

export default card;
