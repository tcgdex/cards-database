import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "メガヤンマex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 280,
	types: ["Grass"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バズブースト" },
			effect: {
				ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の山札から「基本[G]エネルギー」を3枚まで選び、このポケモンにつける。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ジェットサイクロン" },
			damage: 210,
			cost: ["Grass", "Grass", "Grass", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを3個選び、ベンチポケモン1匹につけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863309,
			},
		},
	],

	evolveFrom: {
		ja: "ヤンヤンマ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [469],

	suffix: "EX",
};

export default card;
