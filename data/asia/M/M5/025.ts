import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "クワガノン",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		ja: "デンヂムシを 抱えて 電気を もらい 大あごから 強力な 電磁ビームを 連射する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "クイックダイブ" },
			cost: ["Lightning"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ギガレールガン" },
			damage: 260,
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "このポケモンに「ボルト[L]エネルギー」がついていないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888267,
			},
		},
	],

	evolveFrom: {
		ja: "デンヂムシ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [738],
};

export default card;
