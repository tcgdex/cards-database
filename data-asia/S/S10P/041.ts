import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "バサギリVSTAR",
		'zh-tw': "劈斧螳螂VSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "ブレイクアックス",
				'zh-tw': "破壞斧",
			},
			damage: 120,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手のベンチの「ポケモンV」1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的備戰區的1隻「寶可夢【V】」也受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "ランページスター",
				'zh-tw': "[VSTAR力量]亂暴星星",
			},
			damage: "30×",
			cost: ["Fighting"],
			effect: {
				ja: "自分のトラッシュにあるポケモンの枚数×30ダメージ。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "造成自己的棄牌區的寶可夢卡的張數×30點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651100,
				tcgplayer: 569884,
			},
		},
	],

	evolveFrom: {
		ja: "バサギリV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [900],
};

export default card;
