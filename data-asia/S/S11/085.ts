import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴンZ",
		'zh-tw': "多邊獸Ｚ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "異次元 空間に 出入りできる プログラムを 追加したところ 挙動が 不安定になった。",
		'zh-tw': "#N/A",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "デグレードビーム",
				'zh-tw': "降級光束",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の進化しているポケモンを1匹選び、「進化カード」を好きなだけはがして退化させる。はがしたカードは、相手の山札にもどして切る。",
				'zh-tw': "選擇對手的1隻進化寶可夢，移除任意數量的「進化卡」使其退化。將移除的卡放回對手的牌庫並重洗。",
			},
		},
		{
			name: {
				ja: "パワービーム",
				'zh-tw': "强力光束",
			},
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667960,
				tcgplayer: 570016,
			},
		},
	],

	evolveFrom: {
		ja: "ポリゴン２",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [474],
};

export default card;
