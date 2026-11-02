import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ビッパ",
		'zh-tw': "大牙狸",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "いつも 大木や 石を かじって 丈夫な 前歯を 削っている。 水辺に 巣を 作り 暮らす。",
		'zh-tw': "總是啃大樹和石頭來打磨堅硬的門牙。在水邊築巢生活。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "へっちゃらがお",
				'zh-tw': "一臉不在乎",
			},
			effect: {
				ja: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。",
				'zh-tw': "只要這隻寶可夢在備戰區，不會受到招式的傷害。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ひっさつまえば",
				'zh-tw': "必殺門牙",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687765,
				tcgplayer: 571742,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [399],
};

export default card;
