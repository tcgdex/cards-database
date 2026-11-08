import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ザマゼンタV",
		'zh-tw': "藏瑪然特V",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ふくつのたて",
				'zh-tw': "不屈之盾",
			},
			effect: {
				'ja-jp': "このポケモンは、相手の「ポケモンVMAX」からワザのダメージを受けない。",
				'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【VMAX】」招式的傷害。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "アサルトタックル",
				'zh-tw': "進擊衝撞",
			},
			damage: 130,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586634,
				tcgplayer: 571371,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Double rare",
	dexId: [889],
};

export default card;
