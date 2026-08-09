import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン2",
		'zh-tw': "多邊獸Ⅱ",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "ポリゴンを 特別な データで アップデート。 さまざまな ことを 自分で 学び 成長する。",
		'zh-tw': "#N/A",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ガベージアタック",
				'zh-tw': "廢物攻擊",
			},
			damage: "20×",
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのロストゾーンにある「ポケモンのどうぐ」の枚数×20ダメージ。",
				'zh-tw': "造成雙方的放逐區的「寶可夢道具」卡的張數×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667959,
				tcgplayer: 570015,
			},
		},
	],

	evolveFrom: {
		ja: "ポリゴン",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [233],
};

export default card;
