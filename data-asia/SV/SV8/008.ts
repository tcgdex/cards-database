import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "シガロコ",
		'zh-tw': "蟲滾泥",
		'zh-cn': "蟲滾泥",
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "泥玉を 転がしながら 進化の エネルギーを 熟成させる。 やがて 進化のときを 迎える。",
		'zh-tw': "會一邊滾著泥巴球， 一邊使進化的能量成熟。 最終會迎接進化的時刻。",
		'zh-cn': "會一邊滾著泥巴球， 一邊使進化的能量成熟。 最終會迎接進化的時刻。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "もってくる",
				'zh-tw': "呼喚",
				'zh-cn': "呼喚",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
				'zh-tw': "從自己的牌庫抽出1張卡。",
				'zh-cn': "從自己的牌庫抽出1張卡。",
			},
		},
		{
			name: {
				ja: "ころがる",
				'zh-tw': "滾動",
				'zh-cn': "滾動",
			},
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793442,
				tcgplayer: 587588,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [953],
};

export default card;
