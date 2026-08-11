import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アーマーガアV",
		'zh-tw': "鋼鎧鴉V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "わしづかみ",
				'zh-tw': "緊抓",
			},
			damage: 30,
			cost: ["Metal"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "スカイハリケーン",
				'zh-tw': "天空颶風",
			},
			damage: 190,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「スカイハリケーン」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「天空颶風」。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586631,
				tcgplayer: 571368,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [823],
};

export default card;
