import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミルタンク",
		'zh-tw': "大奶罐",
		th: "มิลแทงค์",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "栄養満点の ミルクを 出すことから 古くから 人間と ポケモンの 暮らしを 支えてきた。",
		'zh-tw': "由於能生產營養滿分的鮮奶，自古以來支持著 人類與寶可夢的生活。",
		th: "คอยช่วยสนับสนุนในด้านความเป็นอยู่ของผู้คนและโปเกมอนมาตั้งแต่ยุคโบราณด้วยการผลิตนมที่มีสารอาหารเต็มเปี่ยม",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ミラクルボディ",
				'zh-tw': "奇跡之軀",
				th: "มิราเคิลบอดี้",
			},
			effect: {
				ja: "このポケモンは、相手の「ポケモンV」からワザのダメージを受けない。",
				'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【V】」招式的傷害。",
				th: "โปเกมอนนี้จะไม่ได้รับแดเมจจากท่าต่อสู้ของ [โปเกมอน【V】] ฝ่ายตรงข้าม",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "けちらす",
				'zh-tw': "踢散",
				th: "ไล่กระเจิง",
			},
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数×20ダメージ追加。",
				'zh-tw': "增加對手的備戰寶可夢的數量×20點傷害。",
				th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้าม x20",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687681,
				tcgplayer: 571657,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [241],
};

export default card;
