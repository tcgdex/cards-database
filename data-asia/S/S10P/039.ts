import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ジュナイパー",
		'zh-tw': "洗翠 狙射樹梟",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "ヒスイの 極寒に 耐えるため 羽根の 芯に 空気を含み 防寒機能 有す。 環境が 進化に 影響すると 判明す。",
		'zh-tw': "為抵抗洗翠的嚴寒氣候，羽毛的芯中含有空氣，因而能夠防寒。 由此可見環境會對進化產生影響。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "くいこむかぎづめ",
				'zh-tw': "深入鉤爪",
			},
			damage: "30×",
			cost: [],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×30ダメージ。",
				'zh-tw': "造成對手的戰鬥寶可夢身上放置的傷害指示物的數量×30點傷害。",
			},
		},
		{
			name: {
				ja: "ダイレクトアロー",
				'zh-tw': "筆直箭",
			},
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、80ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到80點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651098,
				tcgplayer: 569882,
			},
		},
	],

	evolveFrom: {
		ja: "フクスロー",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [724],
};

export default card;
