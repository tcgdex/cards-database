import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシスVSTAR",
		'zh-tw': "代歐奇希斯VSTAR",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "サイコジャベリン",
				'zh-tw': "精神標槍",
			},
			damage: 190,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "相手のベンチの「ポケモンV」1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的備戰區的1隻「寶可夢【V】」也受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "スターフォース",
				'zh-tw': "[VSTAR力量]星星神力",
			},
			damage: "60×",
			cost: ["Psychic"],
			effect: {
				ja: "おたがいのバトルポケモンについているエネルギーの数×60ダメージ。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "造成雙方的戰鬥寶可夢身上附加的能量的數量×60點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687785,
				tcgplayer: 571761,
			},
		},
	],

	evolveFrom: {
		ja: "デオキシスV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [386],
};

export default card;
