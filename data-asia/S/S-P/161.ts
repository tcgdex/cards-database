import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキー",
		'zh-tw': "冰伊布VSTAR",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "満月の 夜や 興奮 したとき 全身の 輪っか模様は 黄色く 光る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "やみうち",
				'zh-tw': "冰柱射擊",
			},
			cost: ["Darkness"],
			effect: {
				ja: "ダメカンがのっている相手のポケモン1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "ムーンミラージュ",
				'zh-tw': "[VSTAR力量]水晶星星",
			},
			damage: 80,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561776,
				tcgplayer: 597359,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [197],
};

export default card;
