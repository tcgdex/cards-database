import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘラクロス",
	},

	illustrator: "Satoshi Ito",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "自慢のツノを 相手の お腹の 下に ねじこみ 一気に 持ち上げ ぶん投げてしまう 力持ち。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スパイクドロー" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "10まんばりき" },
			damage: 130,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899786,
				tcgplayer: 709157,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [214],
};

export default card;
