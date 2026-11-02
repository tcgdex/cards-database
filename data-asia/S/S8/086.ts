import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨクバリスVMAX",
		'zh-tw': "藏飽栗鼠VMAX",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "まるもうけ",
				'zh-tw': "零成本",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージで、相手のたねポケモンがきぜつしたなら、サイドを2枚多くとる。",
				'zh-tw': "若這個招式的傷害將對手的【基礎】寶可夢【氣絕】，則多獲得2張獎賞卡。",
			},
		},
		{
			name: {
				ja: "ダイゴウヨク",
				'zh-tw': "極巨強慾",
			},
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を3枚引く。",
				'zh-tw': "從自己的牌庫抽出3張卡。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575641,
				tcgplayer: 569587,
			},
		},
	],

	evolveFrom: {
		ja: "ヨクバリスV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [820],
};

export default card;
