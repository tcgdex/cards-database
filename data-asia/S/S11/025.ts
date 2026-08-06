import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルコ",
		'zh-tw': "吼吼鯨",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "飲みこんだ 海水を 目の 上の 鼻の 穴から 噴き出し アピール。 毎日 １トンの ヨワシを 食う。",
		'zh-tw': "把喝入的海水從眼睛上方的鼻孔中噴出來吸引他人。 每天要吃１噸弱丁魚。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ゴクゴクのむ",
				'zh-tw': "咕嘟咕嘟喝水",
			},
			damage: 30,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
				'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。",
			},
		},
		{
			name: {
				ja: "スプラッシュ",
				'zh-tw': "飛濺",
			},
			damage: 60,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667900,
				tcgplayer: 569956,
			},
		},
	],

	retreat: 4,
	regulationMark: "F",
	rarity: "Common",
	dexId: [320],
};

export default card;
