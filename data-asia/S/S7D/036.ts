import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "エアームド",
		'zh-tw': "盔甲鳥",
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "鋼の 鎧を 身に まとう。 重そうに 見えるが 最大 ３００キロの 速度で 飛べるぞ。",
		'zh-tw': "全身披著鋼鐵鎧甲。看起來很重，但牠能以最高３００公里的時速飛行。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はがねのつばさ",
				'zh-tw': "鋼翼",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			},
		},
		{
			name: {
				ja: "スライスブレード",
				'zh-tw': "利刃切割",
			},
			damage: 110,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571619,
				tcgplayer: 569359,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [227],
};

export default card;
