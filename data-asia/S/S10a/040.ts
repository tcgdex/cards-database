import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "エルレイドV",
		'zh-tw': "艾路雷朵V",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ライジングソード",
				'zh-tw': "璀璨之劍",
			},
			damage: "20+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "自分がすでにとったサイドの枚数×50ダメージ追加。",
				'zh-tw': "增加自己已經獲得的獎賞卡的張數×50點傷害。",
			},
		},
		{
			name: {
				ja: "バスタースイング",
				'zh-tw': "粗暴橫掃",
			},
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
				'zh-tw': "這個招式的傷害不計算抵抗力。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656350,
				tcgplayer: 570703,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [475],
};

export default card;
