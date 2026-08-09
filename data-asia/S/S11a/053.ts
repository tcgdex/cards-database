import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ザマゼンタ",
		'zh-tw': "藏瑪然特",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "いかなる 攻撃も 弾き返す 姿は 格闘王の盾 と 呼ばれ 恐れ 崇められた。",
		'zh-tw': "能夠反彈一切的攻擊，因此被稱為格鬥王之盾，受到人們的畏懼與尊崇。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "メタルシールド",
				'zh-tw': "金屬盾牌",
			},
			effect: {
				ja: "このポケモンにエネルギーがついているなら、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "若這隻寶可夢身上附有能量，則這隻寶可夢受到招式的傷害「-30」點。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "かたきうち",
				'zh-tw': "報仇",
			},
			damage: "100+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "前の相手の番に、自分のポケモンがきぜつしていたなら、120ダメージ追加。",
				'zh-tw': "在上個對手的回合，若自己的寶可夢【氣絕】了，則增加120點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673051,
				tcgplayer: 570816,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [889],
};

export default card;
