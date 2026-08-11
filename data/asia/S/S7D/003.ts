import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ハスブレロ",
		'zh-tw': "蓮帽小童",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "日当たりの 良い 水辺に 棲む。 昼間は 水草の ベッドで 眠り 日が 暮れると 動き出す。",
		'zh-tw': "住在日照充足的水邊。白天在水草做的床上睡覺，太陽下山後就會出來活動。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "スプラッシュ",
				'zh-tw': "飛濺",
			},
			damage: 50,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571585,
				tcgplayer: 569326,
			},
		},
	],

	evolveFrom: {
		ja: "ハスボー",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [271],
};

export default card;
