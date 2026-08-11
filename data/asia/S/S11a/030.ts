import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "カイオーガ",
		'zh-tw': "蓋歐卡",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "大雨を 降らせる 能力で 海を 広げたと 言われている。 海溝の 底で 眠っていた。",
		'zh-tw': "據說會用降下大雨的能力擴張海洋。一直沉睡在海溝的底部。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "うねりをよぶ",
				'zh-tw': "召喚潮漩",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から[W]エネルギーを1枚選び、このポケモンにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【水】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ダイナミックウェーブ",
				'zh-tw': "極限波",
			},
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを3個手札にもどし、相手のポケモン1匹に、180ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "將這隻寶可夢身上附加的3個能量放回手牌，對手的1隻寶可夢受到180點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673027,
				tcgplayer: 570793,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [382],
};

export default card;
