import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のデンリュウ",
		'zh-tw': "<火箭隊的>電龍",
		'zh-cn': "<火箭隊的>電龍",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "尻尾の 灯りは 遠くまで 届くので 昔より かがり火として 大事に されている。",
		'zh-tw': "尾巴的亮光能傳得很遠， 一直以來都被當成篝火， 受到人們的重視。",
		'zh-cn': "尾巴的亮光能傳得很遠， 一直以來都被當成篝火， 受到人們的重視。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ダークインパルス",
				'zh-tw': "黑暗脈衝",
				'zh-cn': "黑暗脈衝",
			},
			effect: {
				ja: "このポケモンがいるかぎり、相手が手札からポケモンを出して進化させるたび、そのポケモンにダメカンを4個のせる。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
				'zh-tw': "只要這隻寶可夢在場上，每次對手從手牌使出寶可夢完成進化時，在那隻寶可夢身上放置4個傷害指示物。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
				'zh-cn': "只要這隻寶可夢在場上，每次對手從手牌使出寶可夢完成進化時，在那隻寶可夢身上放置4個傷害指示物。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ヘッドボルト",
				'zh-tw': "伏特頭擊",
				'zh-cn': "伏特頭擊",
			},
			damage: 140,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821868,
				tcgplayer: 628677,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のモココ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [181],
};

export default card;
