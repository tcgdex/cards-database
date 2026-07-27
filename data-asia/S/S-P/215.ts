import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "リーフィア",
		'zh-tw': "洗翠 火爆獸V",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "しっぽは 鋭く 刃のよう。 大木も 真っ二つに する 抜群の 切れ味を 誇る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "リーフガード",
				'zh-tw': "灼熱",
			},
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			},
		},
		{
			name: {
				ja: "くさむすび",
				'zh-tw': "戰慄火焰",
			},
			damage: "50+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。",
				'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，在看過那張卡正面後放回對手的牌庫並重洗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 574583,
				tcgplayer: 597399,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [470],
};

export default card;
