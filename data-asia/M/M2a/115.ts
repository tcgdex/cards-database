import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "モモワロウ",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "モモ型の 殻は 猛毒の 貯蔵庫。 毒の 餅を 作り 人や ポケモンに ふるまう。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さいごのくさり" },
			effect: {
				ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "もちラッシュ" },
			damage: 20,
			cost: ["Darkness"],
			effect: {
				ja: "次の自分の番、このポケモンの「もちラッシュ」のダメージは「+50」される。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861358,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861712,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 861713,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [1025],
};

export default card;
