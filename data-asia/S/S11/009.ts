import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "モロバレル",
		'zh-tw': "敗露球菇",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "毒の 胞子を 噴きつける。 はやく 洗い流さないと そこに キノコが 生えてくるぞ。",
		'zh-tw': "會噴出帶有毒性的孢子。如果不盡快洗掉的話， 就會從那裡長出蘑菇來喔。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "どっきりほうし",
				'zh-tw': "整人孢子",
			},
			effect: {
				ja: "相手の番に、このカードが相手のワザ・特性・グッズ・サポートの効果で手札からトラッシュされたとき、相手の手札をすべてトラッシュする。",
				'zh-tw': "在對手的回合，當這張卡因對手的招式・特性・物品卡・支援者卡的效果而從手牌被丟棄時，將對手的手牌全部丟棄。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ヒプノハンマー",
				'zh-tw': "昏睡之錘",
			},
			damage: 50,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667612,
				tcgplayer: 569940,
			},
		},
	],

	evolveFrom: {
		ja: "タマゲタケ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [591],
};

export default card;
