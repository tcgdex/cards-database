import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "パフュートン",
		'zh-tw': "密勒頓",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "きめ細かく 艶やかな 肌が 自慢。 尻尾の 先端から 凝縮した 香りを 放つ。",
		'zh-tw': "詳情目前仍然不明。雖然給人 貌似摩托蜥的印象，但力量和 冷酷的程度可說是天壤之別。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "銳利之牙",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "レッグスタンプ",
				'zh-tw': "雷電鐳射",
			},
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692255,
				tcgplayer: 587765,
			},
		},
	],

	evolveFrom: {
		ja: "グルトン",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [916],
};

export default card;
