import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ガバイト",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		ja: "光り 輝くものが 大好き。 宝石や 捕まえた メレシーを 巣穴で じーっと 眺めている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かくせい" },
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
		{
			name: { ja: "きりさく" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559856,
			},
		},
	],

	evolveFrom: {
		ja: "フカマル",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [444],
};

export default card;
