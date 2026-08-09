import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "モノズ",
		'zh-tw': "單首龍",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "目が 見えないので 手あたりしだい 噛みついて 自分の まわりの 状況を 把握 している。",
		'zh-tw': "因為眼睛看不見，所以會又撞又咬，來判斷四周的狀況。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なかまをよぶ",
				'zh-tw': "呼朋引伴",
			},
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
			},
			damage: 30,
			cost: ["Psychic", "Darkness"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571627,
				tcgplayer: 569365,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [633],
};

export default card;
