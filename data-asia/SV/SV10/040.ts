import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のソーナンス",
		'zh-tw': "<火箭隊的>果然翁",
		'zh-cn': "<火箭隊的>果然翁",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "真っ黒な 尻尾を 隠すため 暗闇で ひっそりと 生きている。 自分からは 攻撃しない。",
		'zh-tw': "為了隱藏漆黑的尾巴 而悄悄地生活在黑暗之中。 不會主動發動攻擊。",
		'zh-cn': "為了隱藏漆黑的尾巴 而悄悄地生活在黑暗之中。 不會主動發動攻擊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ロケットミラー",
				'zh-tw': "火箭鏡面",
				'zh-cn': "火箭鏡面",
			},
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "自分のベンチの「ロケット団のポケモン」を1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
				'zh-tw': "選擇1隻自己的備戰區的「火箭隊的寶可夢」，將所選的寶可夢身上放置的傷害指示物，全部改放於對手的戰鬥寶可夢身上。",
				'zh-cn': "選擇1隻自己的備戰區的「火箭隊的寶可夢」，將所選的寶可夢身上放置的傷害指示物，全部改放於對手的戰鬥寶可夢身上。",
			},
		},
		{
			name: {
				ja: "とびだしヘッド",
				'zh-tw': "魯莽頭擊",
				'zh-cn': "魯莽頭擊",
			},
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821872,
				tcgplayer: 628681,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [202],
};

export default card;
