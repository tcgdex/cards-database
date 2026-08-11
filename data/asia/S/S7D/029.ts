import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクロッグ",
		'zh-tw': "毒骷蛙",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "獲物を しとめると ゲロゲロと 勝利の 雄叫びを あげる。 ガマゲロゲと 種として 近い。",
		'zh-tw': "制服了獵物之後，便會呱呱地發出勝利的歡呼。與蟾蜍王是相近的物種。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "バッドポイズン",
				'zh-tw': "惡棍猛毒",
			},
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は4個になる。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為4個。",
			},
		},
		{
			name: {
				ja: "マグナムパンチ",
				'zh-tw': "增量拳",
			},
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571612,
				tcgplayer: 569352,
			},
		},
	],

	evolveFrom: {
		ja: "グレッグル",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [454],
};

export default card;
