import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガマゲロゲ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "こぶしの コブを 振動させると パンチの 威力が 倍増する。 一撃で 大岩を 粉砕。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じならし" },
			effect: {
				ja: "自分の番に1回使える。自分の山札から好きなカードを1枚選ぶ。残りの山札を切り、選んだカードを山札の上にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "わななくこぶし" },
			damage: "80+",
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチのダメカンがのっているポケモンの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555202,
			},
		},
	],

	evolveFrom: {
		ja: "ガマガル",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [537],
};

export default card;
