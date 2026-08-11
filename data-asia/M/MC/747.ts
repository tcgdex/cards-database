import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "クワガノン",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		ja: "デンヂムシを 抱えて 電気を もらい 大あごから 強力な 電磁ビームを 連射する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ボルトチェンジ" },
			damage: 90,
			cost: ["Lightning"],
			effect: {
				ja: "このポケモンをベンチの[L]ポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "スパーキングアタック" },
			damage: 240,
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864049,
			},
		},
	],

	evolveFrom: {
		ja: "デンヂムシ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [738],
};

export default card;
