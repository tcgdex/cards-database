import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "モルフォンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しのびのごくい" },
			damage: "110+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "この番、手札から「キョウの罠」を出して使っていたなら、90ダメージ追加。「アンズ」を出して使っていたなら、次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "じゅうまいがえしGX" },
			damage: 60,
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札をすべて山札にもどして切る。その後、山札を10枚引く。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558243,
			},
		},
	],

	evolveFrom: {
		ja: "コンパン",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [49],

	suffix: "GX",
};

export default card;
