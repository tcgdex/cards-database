import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ボスゴドラ",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "山を まるごと 縄張りに する。 傷が 多い ボスゴドラほど 戦っているので 侮れない。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ガチガチプレス" },
			damage: 80,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを8個のせる。",
			},
		},
		{
			name: { ja: "ギガインパクト" },
			damage: 160,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558152,
			},
		},
	],

	evolveFrom: {
		ja: "コドラ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [306],
};

export default card;
