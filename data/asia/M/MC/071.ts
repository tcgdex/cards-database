import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オリーヴァex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "オイルマシンガン" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のポケモンを6回選び、選んだポケモン全員に、弱点・抵抗力を計算せず、選んだ回数×20ダメージ。（1匹を2回以上選べる。）",
			},
		},
		{
			name: { ja: "アロマシュート" },
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンの特殊状態を、すべて回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863362,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "オリーニョ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [930],

	suffix: "EX",
};

export default card;
