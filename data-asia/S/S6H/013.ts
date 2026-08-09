import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "カエンジシ",
		'zh-tw': "火炎獅",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "摂氏 ６０００度の 息を 吐くが 獲物には 使わない。 肉は 生のほうが 好み だから。",
		'zh-tw': "能吐出攝氏６０００度的氣息，但不會用在獵物身上，因為牠比較喜歡吃生肉。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かえん",
				'zh-tw': "打擊",
			},
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "はかいのツメ",
				'zh-tw': "雙重金勾臂",
			},
			damage: 70,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×40點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560429,
				tcgplayer: 569145,
			},
		},
	],

	evolveFrom: {
		ja: "シシコ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [668],
};

export default card;
