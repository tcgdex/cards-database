import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴローニャ",
		'zh-tw': "隆隆岩",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "自分で 身体を 爆発させる。 そのパワーで 急な 山道も すごい スピードで 登っていく。",
		'zh-tw': "會讓自己的身體爆炸，然後利用爆炸的力量快速登上陡峭的山路。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "やけくそボンバー",
				'zh-tw': "自棄轟炸",
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、ワザを使ったポケモンにダメカンを10個のせる。",
				'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【氣絕】時，在使用招式的寶可夢身上放置10個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "すてみタックル",
				'zh-tw': "捨身衝撞",
			},
			damage: 160,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575609,
				tcgplayer: 569555,
			},
		},
	],

	evolveFrom: {
		ja: "ゴローン",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [76],
};

export default card;
