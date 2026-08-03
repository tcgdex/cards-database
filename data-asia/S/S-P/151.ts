import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ルギア",
		'zh-tw': "龍蝦小兵",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "海の神様と 伝えられる ポケモン。 嵐の 夜 姿を 見たという 話が 伝えられる。",
		'zh-tw': "有著頑強生命力的寶可夢。不論河裡的水有多髒都能適應並繁衍後代。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かぜおこし",
				'zh-tw': "水槍",
			},
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ウインドプレッシャー",
				'zh-tw': "蟹鉗錘",
			},
			damage: 250,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札が5枚以下なら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597350,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [249],
};

export default card;
