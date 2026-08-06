import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マホイップ",
		'zh-tw': "霜奶仙",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "手から 生みだす クリームは マホイップが 幸せなとき 甘味と コクが 深まる。",
		'zh-tw': "當牠感到幸福的時候，手中產生出的鮮奶油會變得更加香濃甜美。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ついかオーダー",
				'zh-tw': "追加點餐",
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、自分の「マスター」を使っても、自分の番は終わらない。",
				'zh-tw': "只要這隻寶可夢在戰鬥場上，就算使用了自己的「老闆」，自己的回合也不會結束。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "レインボーフレーバー",
				'zh-tw': "彩虹口味",
			},
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている基本エネルギーのタイプの数×40ダメージ追加。",
				'zh-tw': "增加自己的場上寶可夢身上附加的基本能量的屬性種類的數量×40點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586597,
				tcgplayer: 571334,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578394,
			},
		},
	],

	evolveFrom: {
		ja: "マホミル",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [869],
};

export default card;
