import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "フラージェス",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Fairy"],

	description: {
		ja: "育てた 花々を 操る。 フラージェスの 放つ 花吹雪は 美しさも パワーも 圧倒的。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はなつみ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の手札からオモテを見ないで2枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はなびらのまい" },
			damage: "60×",
			cost: ["Fairy", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×60ダメージ。このポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554928,
			},
		},
	],

	evolveFrom: {
		ja: "フラエッテ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [671],
};

export default card;
