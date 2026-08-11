import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポポッコ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "太陽の 光を 浴びるため 花びらを 広げるだけでなく 近づこうと 空に 浮かんでしまう。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "そらのはなみち" },
			effect: {
				ja: "自分の番に1回使える。自分の山札から「ワタッコ」を1枚選ぶ。その後、このポケモンと、ついているすべてのカードを、ロストゾーンに置き、このポケモンがいた場所に、選んだ「ワタッコ」を出す。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543391,
			},
		},
	],

	evolveFrom: {
		ja: "ハネッコ",
	},

	retreat: 0,
	regulationMark: "B",
	rarity: "None",
	dexId: [188],
};

export default card;
