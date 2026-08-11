import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のバンギラス",
		'zh-tw': "<火箭隊的>班基拉斯",
		'zh-cn': "<火箭隊的>班基拉斯",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "あたりの 地形を 変えるぐらい 朝飯前の 力持ち。 まわりを 気にしない ふてぶてしさ。",
		'zh-tw': "即便是改變周圍的地形 也是小事一樁的大力士。 個性狂妄，不顧周遭的感受。",
		'zh-cn': "即便是改變周圍的地形 也是小事一樁的大力士。 個性狂妄，不顧周遭的感受。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "すなおこし",
				'zh-tw': "揚沙",
				'zh-cn': "揚沙",
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、ポケモンチェックのたび、相手のたねポケモン全員に、それぞれダメカンを2個のせる。",
				'zh-tw': "只要這隻寶可夢在戰鬥場上，每次寶可夢檢查時，在對手的所有【基礎】寶可夢身上各放置2個傷害指示物。",
				'zh-cn': "只要這隻寶可夢在戰鬥場上，每次寶可夢檢查時，在對手的所有【基礎】寶可夢身上各放置2個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ぶちぬきタックル",
				'zh-tw': "打穿衝撞",
				'zh-cn': "打穿衝撞",
			},
			damage: 180,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
				'zh-cn': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821882,
				tcgplayer: 628691,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のサナギラス",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [248],
};

export default card;
