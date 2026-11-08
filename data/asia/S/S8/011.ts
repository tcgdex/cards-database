import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アマージョV",
		'zh-tw': "甜冷美后V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "クイーンオーダー",
				'zh-tw': "皇后命令",
			},
			damage: "20+",
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモンを好きなだけトラッシュし、トラッシュしたベンチポケモンの数×40ダメージ追加。",
				'zh-tw': "將自己的任意數量的備戰寶可夢丟棄，增加丟棄的備戰寶可夢的數量×40點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575561,
				tcgplayer: 569512,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [763],
};

export default card;
