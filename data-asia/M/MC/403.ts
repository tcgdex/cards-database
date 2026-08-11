import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ルガルガン",
	},

	illustrator: "Yoshioka",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "鋭い ツメや キバで 獲物を 襲う。 信頼する トレーナーの 指示には 忠実に 従う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ターボエッジ" },
			damage: 50,
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから「基本[F]エネルギー」を2枚まで選び、ベンチポケモンに好きなようにつける。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863705,
			},
		},
	],

	evolveFrom: {
		ja: "イワンコ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [745],
};

export default card;
