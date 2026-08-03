import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "オーガポン かまどのめんex",
		'zh-tw': "厄鬼椪 火灶面具ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "いかりがま",
				'zh-tw': "憤怒之窯",
			},
			damage: "20×",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×20ダメージ。",
				'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×20點傷害。",
			},
		},
		{
			name: {
				ja: "ダイナミックブレイズ",
				'zh-tw': "極限火焰",
			},
			damage: "140+",
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、140ダメージ追加。その場合、このポケモンについているエネルギーを、すべてトラッシュする。",
				'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加140點傷害。這個情況下，將這隻寶可夢身上附加的能量卡全部丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767549,
				tcgplayer: 568105,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [1017],

	suffix: "EX",
};

export default card;
