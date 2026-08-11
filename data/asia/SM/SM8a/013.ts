import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレザード",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "電気で 筋肉を 刺激すると １００メートルを ５秒で 走る 脚力に パワーアップする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "でんじスパーク" },
			cost: ["Lightning"],
			effect: {
				ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ボルトチェンジ" },
			damage: 90,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをベンチの[雷]ポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558587,
			},
		},
	],

	evolveFrom: {
		ja: "エリキテル",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [695],
};

export default card;
