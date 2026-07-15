import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリジュラス",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "山中で 穴を 掘り エサを 探す。 落盤に 巻きこまれても へっちゃらなくらい 頑丈。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はがねのかけはし" },
			effect: {
				ja: "このポケモンがいるかぎり、[M]エネルギーがついている自分のポケモン全員のにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アイアンブラスター" },
			damage: 160,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863827,
			},
		},
	],

	evolveFrom: {
		ja: "ジュラルドン",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [1018],
};

export default card;
