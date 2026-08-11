import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アルセウス&ディアルガ&パルキアGX",
		'zh-tw': "圓法師",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "アルティメットレイ",
				'zh-tw': "打滾",
			},
			damage: 150,
			cost: ["Water", "Metal", "Colorless"],
			effect: {
				ja: "自分の山札にある基本エネルギーを3枚まで、自分のポケモンに好きなようにつける。そして山札を切る。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			},
		},
		{
			name: { ja: "オルタージェネシスGX" },
			cost: ["Metal"],
			effect: {
				ja: "この対戦が終わるまで、自分のポケモン全員が使うワザの、相手のバトルポケモンへのダメージはすべて「+30」される。追加で[水]エネルギーが1個ついているなら、そのワザのダメージで相手のバトルポケモンをきぜつさせた場合、サイドを1枚多くとる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525455,
				tcgplayer: 597364,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Promo",
	dexId: [493, 483, 484],

	suffix: "TAG TEAM-GX",
};

export default card;
