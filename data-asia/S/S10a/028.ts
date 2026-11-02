import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "チリーン",
		'zh-tw': "風鈴鈴",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "超音波の 鳴き声を 持つ。 ふわふわと 浮かび 風に 乗って 長い 距離を 旅する。",
		'zh-tw': "擁有超音波的叫聲。輕飄飄地浮起來， 乘著風旅行到遠方。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ゆめみのねいろ",
				'zh-tw': "美夢音色",
			},
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンに、相手が手札からエネルギーをつけたなら、そのポケモンをねむりにする。",
				'zh-tw': "在下個對手的回合，若對手從手牌將能量卡附於受到這個招式的寶可夢身上，則將那隻寶可夢【睡眠】。",
			},
		},
		{
			name: {
				ja: "ぶらさがる",
				'zh-tw': "垂吊",
			},
			damage: 30,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656329,
				tcgplayer: 570691,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577110,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [358],
};

export default card;
