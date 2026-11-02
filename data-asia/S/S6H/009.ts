import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "アマージョ",
		'zh-tw': "甜冷美后",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "硬く 尖った つま先で 蹴りを おみまいして 相手の 体と 心に 消えない 傷を 残す。",
		'zh-tw': "用又尖又硬的腳尖施展踢擊，朝對手的身體和心靈留下無法磨滅的創傷。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ふみにじる",
				'zh-tw': "暗影薄霧",
			},
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×50ダメージ追加。",
				'zh-tw': "在下個對手的回合，對手無法從手牌附上「特殊能量」，也無法使出「競技場」。",
			},
		},
		{
			name: {
				ja: "ソーラービーム",
				'zh-tw': "星碎",
			},
			damage: 120,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560425,
				tcgplayer: 569141,
			},
		},
	],

	evolveFrom: {
		ja: "アママイコ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [763],
};

export default card;
