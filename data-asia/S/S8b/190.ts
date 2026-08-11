import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラ",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "どんな 生き物も 降りられない 深い 海の底で 眠りながら 力を 蓄えている という。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かいていのぬし" },
			effect: {
				ja: "自分のバトルポケモンが、相手のポケモンからワザのダメージを受けてきぜつするたび、1回使える。きぜつしたポケモンについている[水]エネルギーを好きなだけ選び、このポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アクアバースト" },
			damage: "40×",
			cost: ["Water"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数×40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586929,
				tcgplayer: 571442,
			},
		},
	],

	evolveFrom: {
		ja: "シードラ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [230],
};

export default card;
