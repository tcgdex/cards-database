import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンタロス",
		'zh-tw': "肯泰羅",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "集団で 生活する。 群れの 中で １番 太く 長く キズだらけの ツノを持つのが ボス。",
		'zh-tw': "會組成群體來生活。群體中角最粗、最長， 且傷痕最多的就是老大。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "レイジングブル",
				'zh-tw': "蠻牛",
			},
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×20ダメージ追加。このポケモンをこんらんにする。",
				'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×20點傷害。將這隻寶可夢【混亂】。",
			},
		},
		{
			name: {
				ja: "とっしん",
				'zh-tw': "猛撞",
			},
			damage: 80,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586640,
				tcgplayer: 571377,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [128],
};

export default card;
