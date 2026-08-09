import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "メルタン",
		'zh-tw': "美錄坦",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "とろりと 溶けた 鋼の 体。 地中の 鉄分や 金属を 溶かして 吸収する。",
		'zh-tw': "身體是融化成液狀的鋼鐵。能夠將地底的鐵或其他金屬溶解後吸收進體內。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "てつぶんせっしゅ",
				'zh-tw': "鐵質攝取",
			},
			cost: ["Metal"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
			},
		},
		{
			name: {
				ja: "ずつき",
				'zh-tw': "頭錘",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575626,
				tcgplayer: 569572,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [808],
};

export default card;
