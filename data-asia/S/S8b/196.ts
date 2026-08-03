import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイト",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "トレーナーを 守るためなら サイコパワーを 使いきり 小さな ブラックホールを つくりだす。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アルカナシャイン" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から2枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは手札に加える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブレインウェーブ" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[超]エネルギーの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586935,
				tcgplayer: 571448,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [282],
};

export default card;
