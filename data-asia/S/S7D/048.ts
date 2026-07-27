import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドンV",
		'zh-tw': "鋁鋼龍V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "メタルクロー",
				'zh-tw': "金屬爪",
			},
			damage: 70,
			cost: ["Fighting", "Metal"],
		},
		{
			name: {
				ja: "ワイドブレイカー",
				'zh-tw': "廣域破壞",
			},
			damage: 140,
			cost: ["Fighting", "Metal", "Metal"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-30」點。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571635,
				tcgplayer: 569371,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [884],
};

export default card;
