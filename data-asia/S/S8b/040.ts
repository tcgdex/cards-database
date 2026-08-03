import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "モスノウ",
		'zh-tw': "雪絨蛾",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "野山を 荒らすものには 容赦 しない。 冷たいはねで 飛びまわり 吹雪を 起こして 懲らしめる。",
		'zh-tw': "絕不放過破壞山野環境的人。會用冰冷的翅膀四處飛翔，製造出暴風雪來懲罰他們。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ひょうせつのまい",
				'zh-tw': "冰雪之舞",
			},
			effect: {
				ja: "自分の番に何回でも使える。自分の手札から[水]エネルギーを1枚選び、ベンチの[水]ポケモンにつける。",
				'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張【水】能量卡，附於備戰區的【水】寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "オーロラビーム",
				'zh-tw': "極光束",
			},
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586556,
				tcgplayer: 571293,
			},
		},
	],

	evolveFrom: {
		ja: "ユキハミ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [873],
};

export default card;
