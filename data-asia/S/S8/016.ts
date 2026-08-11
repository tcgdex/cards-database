import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "クイタラン",
		'zh-tw': "熔蟻獸",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "炎を ベロの ように 使う。 アイアントの 硬い 外骨格を じわじわと 溶かし いただくのだ。",
		'zh-tw': "將火焰當成舌頭來使用。會一點一點地熔化鐵蟻堅硬的外骨骼，然後把牠吃掉。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ほのおをまとう",
				'zh-tw': "火焰纏身",
			},
			damage: 20,
			cost: ["Fire"],
			effect: {
				ja: "自分のトラッシュから[炎]エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇1張【火】能量卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				ja: "エキサイトフレイム",
				'zh-tw': "激動火焰",
			},
			damage: 90,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このワザを使うためのエネルギーより、3個多くエネルギーがついているなら、相手のベンチポケモン1匹にも、180ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "若身上附有的能量比使用這個招式所需的能量多3個，則對手的1隻備戰寶可夢也受到180點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575571,
				tcgplayer: 569517,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [631],
};

export default card;
