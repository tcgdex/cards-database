import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンファン",
		'zh-tw': "頓甲",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "キバが 長くて 大きいほど 群れの中での ランクが 高い。 キバが 伸びるには 時間が かかる。",
		'zh-tw': "牙齒越大越長，在族群裡的地位就越高。 牙齒的生長需要很長的時間。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "オーバースピン",
				'zh-tw': "超頻旋轉",
			},
			damage: 110,
			cost: ["Fighting"],
			effect: {
				ja: "この番、このポケモンに進化していたなら、このワザは失敗。",
				'zh-tw': "在這個回合，若進化成這隻寶可夢，則這個招式失敗。",
			},
		},
		{
			name: {
				ja: "きょだいなキバ",
				'zh-tw': "巨大之牙",
			},
			damage: 170,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667934,
				tcgplayer: 569990,
			},
		},
	],

	evolveFrom: {
		ja: "ゴマゾウ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [232],
};

export default card;
