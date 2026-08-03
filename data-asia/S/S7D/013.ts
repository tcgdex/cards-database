import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ソーナンス",
		'zh-tw': "果然翁",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "真っ黒な 尻尾を 隠すため 暗闇で ひっそりと 生きている。 自分からは 攻撃しない。",
		'zh-tw': "為了隱藏漆黑的尾巴而悄悄地生活在黑暗之中。不會主動發動攻擊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ミラーペイン",
				'zh-tw': "鏡面傷痛",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンと同じ数のダメカンを、相手のバトルポケモンにのせる。",
				'zh-tw': "選擇自己的1隻備戰寶可夢，將與所選的寶可夢身上放置的傷害指示物數量相同的傷害指示物，放置於對手的戰鬥寶可夢身上。",
			},
		},
		{
			name: {
				ja: "とびだしヘッド",
				'zh-tw': "魯莽頭擊",
			},
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571595,
				tcgplayer: 569336,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [202],
};

export default card;
