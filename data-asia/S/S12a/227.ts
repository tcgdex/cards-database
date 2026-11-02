import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラピオンV",
		'zh-tw': "龍王蠍V",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ワイルドスタイル",
				'zh-tw': "狂野風格",
			},
			effect: {
				ja: "相手の場の「いちげき」「れんげき」「フュージョン」のポケモンの数ぶん、このポケモンがワザを使うための[C]エネルギーは少なくなる。",
				'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手的場上「一擊」「連擊」「匯流」寶可夢的數量。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダイナミックテール",
				'zh-tw': "極限之尾",
			},
			damage: 190,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のポケモン1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "自己的1隻寶可夢也受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687789,
				tcgplayer: 571765,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [452],
};

export default card;
