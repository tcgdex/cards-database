import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ロコンVSTAR",
		'zh-tw': "阿羅拉 六尾VSTAR",
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 240,
	types: ["Water"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "スノーミラージュ",
				'zh-tw': "雪之幻想",
			},
			damage: 160,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。次の相手の番、このポケモンは特性を持つポケモンからワザのダメージを受けない。",
				'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。在下個對手的回合，這隻寶可夢不會受到擁有特性的寶可夢招式的傷害。",
			},
		},
		{
			name: {
				ja: "ぎんせつスター",
				'zh-tw': "[VSTAR力量]銀雪星星",
			},
			damage: "70×",
			cost: [],
			effect: {
				ja: "相手の場の「ポケモンV」の数×70ダメージ。このワザのダメージは弱点・抵抗力を計算しない。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "造成對手的場上的「寶可夢【V】」的數量×70點傷害。這個招式的傷害不計算弱點・抵抗力。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673020,
				tcgplayer: 570786,
			},
		},
	],

	evolveFrom: {
		ja: "アローラロコンV",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [37],
};

export default card;
