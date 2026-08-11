import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャロップ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "速く 動く 物体を 見ると 競争したくなり 猛烈な スピードで 追いかけはじめる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かけぬける" },
			damage: 30,
			cost: ["Fire"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ほのおのしっぽ" },
			damage: 60,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556578,
			},
		},
	],

	evolveFrom: {
		ja: "ポニータ",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Common",
	dexId: [78],
};

export default card;
