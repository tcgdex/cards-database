import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ダイケンキV",
		'zh-tw': "洗翠 大劍鬼V",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つづらおとし",
				'zh-tw': "藤箱擊落",
			},
			cost: ["Darkness"],
			effect: {
				ja: "相手の場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。",
				'zh-tw': "選擇最多2張對手的場上寶可夢身上附加的「寶可夢道具」卡，將其丟棄。",
			},
		},
		{
			name: {
				ja: "シャドースラッシュ",
				'zh-tw': "暗影斬",
			},
			damage: 180,
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687791,
				tcgplayer: 571767,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [503],
};

export default card;
