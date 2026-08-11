import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "グレイシア",
		'zh-tw': "雷吉艾勒奇V",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "グレイシアが 放つ 冷気は パウダースノーを つくりだし スキー場に ひっぱりだこ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "あられ",
				'zh-tw': "切換伏特",
			},
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: {
				ja: "フロストタイフーン",
				'zh-tw': "雷電堡壘",
			},
			damage: 120,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「フロストタイフーン」が使えない。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-100」點。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 574584,
				tcgplayer: 597400,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [471],
};

export default card;
