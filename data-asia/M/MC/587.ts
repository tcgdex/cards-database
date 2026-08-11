import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ザングース",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "ハブネークに 出会うと 体毛が 逆立ち 攻撃態勢になる。 鋭い ツメが 最大の 武器。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんぞくぎり" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを3回投げる。オモテが1回なら、20ダメージ追加。オモテが2回なら、50ダメージ追加。すべてオモテなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863889,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [335],
};

export default card;
