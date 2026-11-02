import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ホルード",
		'zh-tw': "掘地兔",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "お腹の 体毛は 保温性に 優れる。 昔の 人は 抜けた 体毛で 防寒着を つくった。",
		'zh-tw': "肚子上的體毛保溫性能優秀。在過去，人們會用牠掉落的毛來製作保暖服裝。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "頭突",
			},
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: {
				ja: "とっしん",
				'zh-tw': "猛撞",
			},
			damage: 150,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
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
				cardmarket: 575639,
				tcgplayer: 569585,
			},
		},
	],

	evolveFrom: {
		ja: "ホルビー",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Common",
	dexId: [660],
};

export default card;
