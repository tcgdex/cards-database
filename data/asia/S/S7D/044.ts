import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サザンドラ",
		'zh-tw': "三首惡龍",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	description: {
		'ja-jp': "３つの 頭で 代わるがわる 噛みつく。 相手が 倒れるまで 攻撃の 手を 休めない。",
		'zh-tw': "３個頭會輪流去咬敵人。在對方倒下之前，絕對不會停止攻擊。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "ドラゴンカウンター",
				'zh-tw': "龍之反擊",
			},
			damage: "20+",
			cost: ["Psychic", "Darkness"],
			effect: {
				'ja-jp': "前の相手の番に、相手がとったサイドの枚数×100ダメージ追加。",
				'zh-tw': "增加上個對手的回合對手獲得的獎賞卡的張數×100點傷害。",
			},
		},
		{
			name: {
				'ja-jp': "しっこくのキバ",
				'zh-tw': "漆黑之牙",
			},
			damage: 210,
			cost: ["Psychic", "Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571630,
				tcgplayer: 569367,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ジヘッド",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [635],
};

export default card;
