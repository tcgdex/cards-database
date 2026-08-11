import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "チャーレム",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "ダンスの ような 優雅な 動きで 攻撃を かわして 強烈な 一撃を 相手に お見舞いする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ヨガパワー" },
			cost: ["Fighting"],
			effect: {
				ja: "ダメカン4個を、相手のポケモンに好きなようにのせる。",
			},
		},
		{
			name: { ja: "たつじんのいちげき" },
			damage: "60+",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "このポケモンに「くろおび」がついているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557300,
			},
		},
	],

	evolveFrom: {
		ja: "アサナン",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [308],
};

export default card;
