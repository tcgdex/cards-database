import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキーV",
		'zh-tw': "月亮伊布V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "くろいまなざし",
				'zh-tw': "黑色目光",
			},
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "げっこうのやいば",
				'zh-tw': "月光利刃",
			},
			damage: "80+",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンがのっているなら、80ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586616,
				tcgplayer: 571353,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [197],
};

export default card;
