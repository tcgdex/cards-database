import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "トドゼルガ",
		'zh-tw': "帝牙海獅",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		ja: "たくましい キバで 流氷を 粉砕する。 分厚い 脂肪が 敵の 攻撃を 跳ね返す。",
		'zh-tw': "用強壯的獠牙粉碎浮冰。厚厚的脂肪可以反彈敵人的攻擊。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "オーロラビーム",
				'zh-tw': "鐵頭碰",
			},
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ヘイルプリズン",
				'zh-tw': "金屬斬",
			},
			damage: 160,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個トラッシュし、相手のバトルポケモンをマヒにする。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560440,
				tcgplayer: 569156,
			},
		},
	],

	evolveFrom: {
		ja: "トドグラー",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [365],
};

export default card;
