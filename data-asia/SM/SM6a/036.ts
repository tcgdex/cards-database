import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジガルデ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "生態系を 監視 していると 考えられている。 さらなる 力を 秘めているとの ウワサ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じひびき" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "いかりのやいば" },
			damage: "60+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンがのっているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559322,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [718],
};

export default card;
