import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "サメハダー",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "抜けた キバを 持っていると 海で 事故に 遭わないと 信じられており アクセサリーなどに 加工 される。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ごうよくしんか" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を上から6枚見て、その中にある[悪]エネルギーを好きなだけ、このポケモンにつける。残りのカードは山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バッドファング" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[悪]エネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558214,
			},
		},
	],

	evolveFrom: {
		ja: "キバニア",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [319],
};

export default card;
