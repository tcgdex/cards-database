import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イイネイヌex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ポイズンマッスル" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「基本[D]エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。つけた場合、このポケモンをどくにする。",
			},
		},
		{
			name: { ja: "クレイジーチェーン" },
			damage: "130+",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンがどくなら、130ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863790,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [1014],

	suffix: "EX",
};

export default card;
