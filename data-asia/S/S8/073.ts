import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "アーマーガア",
		'zh-tw': "鋼鎧鴉",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "飛行能力に 優れていて とても 賢いため ガラル地方で 空の タクシーとして 活躍。",
		'zh-tw': "擁有優秀飛行能力和極度聰明頭腦的牠在伽勒爾地區從事飛翔計程車的工作。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "はがねのつばさ",
				'zh-tw': "鋼翼",
			},
			damage: 50,
			cost: ["Metal"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			},
		},
		{
			name: {
				ja: "パワーサイクロン",
				'zh-tw': "能量旋風",
			},
			damage: 160,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575628,
				tcgplayer: 569574,
			},
		},
	],

	evolveFrom: {
		ja: "アオガラス",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [823],
};

export default card;
