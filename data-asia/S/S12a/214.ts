import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "バオッキーVSTAR",
		'zh-tw': "爆香猿VSTAR",
	},

	illustrator: "nagano",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "ひのたまフィーバー",
				'zh-tw': "火球狂燒",
			},
			damage: "40+",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の山札を上から5枚までトラッシュする。その後、トラッシュした枚数×40ダメージ追加。",
				'zh-tw': "若希望，將自己的牌庫上方最多5張卡丟棄。然後，增加丟棄的張數×40點傷害。",
			},
		},
		{
			name: {
				ja: "エンバースター",
				'zh-tw': "[VSTAR力量]星星餘火",
			},
			damage: "30×",
			cost: ["Fire"],
			effect: {
				ja: "自分のトラッシュにあるエネルギーの枚数×30ダメージ。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "造成自己的棄牌區的能量卡的張數×30點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687776,
				tcgplayer: 571752,
			},
		},
	],

	evolveFrom: {
		ja: "バオッキーV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [514],
};

export default card;
