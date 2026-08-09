import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "イオルブ",
		'zh-tw': "以歐路普",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 放ち 周囲を 調べている。 観測範囲は 周囲 １０キロにも 達するぞ。",
		'zh-tw': "釋放出精神力量來調查周圍的情況。牠的偵測範圍甚至可以達到方圓１０公里。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "エボルコントロール",
				'zh-tw': "進化掌控",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーの数ぶんまで、自分の山札から2進化ポケモン（「イオルブ」をのぞく）を選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多與這隻寶可夢身上附加的能量相同數量的【2階進化】寶可夢卡（「以歐路普」除外），放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "しねんのずつき",
				'zh-tw': "意念頭錘",
			},
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586595,
				tcgplayer: 571332,
			},
		},
	],

	evolveFrom: {
		ja: "レドームシ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [826],
};

export default card;
