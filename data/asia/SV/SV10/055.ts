import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "レジロックex",
		'zh-tw': "雷吉洛克ex",
		'zh-cn': "雷吉洛克ex",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "レジチャージ",
				'zh-tw': "雷吉充能",
				'zh-cn': "雷吉充能",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから「基本[F]エネルギー」を2枚まで選び、このポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇最多2張「基本【鬥】能量」卡，附於這隻寶可夢身上。",
				'zh-cn': "從自己的棄牌區選擇最多2張「基本【鬥】能量」卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				ja: "ジャイアントロック",
				'zh-tw': "巨型岩石",
				'zh-cn': "巨型岩石",
			},
			damage: "140+",
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが2進化ポケモンなら、140ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為【2階進化】寶可夢，則增加140點傷害。",
				'zh-cn': "若對手的戰鬥寶可夢為【2階進化】寶可夢，則增加140點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821887,
				tcgplayer: 628696,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [377],

	suffix: "EX",
};

export default card;
