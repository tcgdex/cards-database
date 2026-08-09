import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイアロー",
		'zh-tw': "烈箭鷹",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "とりポケモンが 主な 獲物。 急接近からの 力強い キックで 地面に 叩き落す。",
		'zh-tw': "主要的獵物是鳥寶可夢。會急速接近對手，然後用猛烈的腳踢把對手擊落到地面。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "わしづかみ",
				'zh-tw': "緊抓",
			},
			damage: 40,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "ニトロダイブ",
				'zh-tw': "火藥奇襲",
			},
			damage: "80+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに[炎]エネルギーがついているなら、80ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有【火】能量，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560845,
				tcgplayer: 569285,
			},
		},
	],

	evolveFrom: {
		ja: "ヒノヤコマ",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [663],
};

export default card;
