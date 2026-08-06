import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ケイコウオ",
		'zh-tw': "螢光魚",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "光る 尾びれで 獲物を 誘う。 昼は 海面 近くに いて 夜に なると 深みに 移動。",
		'zh-tw': "會用發光的尾鰭引誘獵物。白天會待在海面附近， 到了夜裡就會向深海移動。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "うみのばんそう",
				'zh-tw': "海之伴奏",
			},
			effect: {
				ja: "自分の番に何回でも使える。自分の手札から[W]エネルギーを1枚選び、自分の場にいるワザ「きままにおよぐ」を持つポケモンにつける。",
				'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張【水】能量卡，附於自己的場上持有「隨興游水」招式的寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "みずでっぽう",
				'zh-tw': "水槍",
			},
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667902,
				tcgplayer: 569958,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [456],
};

export default card;
