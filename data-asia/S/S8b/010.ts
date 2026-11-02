import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "イオルブV",
		'zh-tw': "以歐路普V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひるがえす",
				'zh-tw': "狡兔三窟",
			},
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: {
				ja: "ミステリーウェーブ",
				'zh-tw': "神秘波",
			},
			damage: "50+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586525,
				tcgplayer: 571263,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Double rare",
	dexId: [826],
};

export default card;
