import { Card } from "models/database/card";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キノガッサ",
		'zh-tw': "斗笠菇",
		'zh-cn': "斗笠菇",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "毒の 胞子を ばらまき 吸いこんで 苦しむ 相手に 強烈な パンチを くらわせる。",
		'zh-tw': "會撒出毒孢子，然後再讓 因吸入孢子而痛苦不堪的 對手吃上一記重拳。",
		'zh-cn': "會撒出毒孢子，然後再讓 因吸入孢子而痛苦不堪的 對手吃上一記重拳。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ダメージラッシュ",
				'zh-tw': "傷害衝刺",
				'zh-cn': "傷害衝刺",
			},
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数×50ダメージ追加。",
				'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×50點傷害。",
				'zh-cn': "擲硬幣直到出現反面，增加正面出現的次數×50點傷害。",
			},
		},
		{
			name: {
				'ja-jp': "メガドレイン",
				'zh-tw': "超級吸取",
				'zh-cn': "超級吸取",
			},
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
				'zh-cn': "將這隻寶可夢恢復「30」HP。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821834,
				tcgplayer: 628644,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "キノココ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [286],
};

export default card;
