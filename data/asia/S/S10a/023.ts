import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲンガー",
		'zh-tw': "耿鬼",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "満月の夜 影が 勝手に 動きだして 笑うのは ゲンガーの しわざに 違いない。",
		'zh-tw': "滿月的夜晚，如果影子自己動起來並露出笑容， 那肯定是耿鬼搞的鬼。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ならくのうらもん",
				'zh-tw': "奈落後門",
			},
			effect: {
				ja: "このカードがトラッシュにあるなら、自分の番に1回使える。このカードをベンチに出す。その後、このポケモンにダメカンを3個のせる。",
				'zh-tw': "若這張卡在棄牌區，則在自己的回合時可使用1次。將這張卡放置於備戰區。然後，在這隻寶可夢身上放置3個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "スクリームサークル",
				'zh-tw': "尖嘯陣",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のベンチポケモンの数×2個ぶんのダメカンを、相手のバトルポケモンにのせる。",
				'zh-tw': "將與對手的備戰寶可夢的數量×2個的相同數量的傷害指示物，放置於對手的戰鬥寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656323,
				tcgplayer: 570686,
			},
		},
	],

	evolveFrom: {
		ja: "ゴースト",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [94],
};

export default card;
