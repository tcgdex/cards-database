import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピッピ",
		'zh-tw': "皮皮",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "満月の夜 静かなる 山間にて 遭遇。 小さき翼 ほのかに光り 舞う姿は まさに 妖精の如き 愛くるしさなり。",
		'zh-tw': "能夠在滿月夜裡的靜謐山間遇見牠。小小翅膀綻放著微光，那舞動的 身姿如同妖精般惹人憐愛。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "おつきみパーティ",
				'zh-tw': "月見派對",
			},
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分のベンチの「ピッピ」全員に、山札から[P]エネルギーを1枚ずつつける。そして山札を切る。",
				'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。附給自己的備戰區的所有「皮皮」各1張牌庫的【超】能量卡。並且重洗牌庫。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ワンダーストーム",
				'zh-tw': "奇跡風暴",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[P]エネルギーの数×20ダメージ。",
				'zh-tw': "造成自己的場上寶可夢身上附加的【超】能量的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656286,
				tcgplayer: 570682,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577103,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [35],
};

export default card;
