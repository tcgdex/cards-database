import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "サボネア",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "雨が 少ない 乾燥した 地域に 生息。 １年に １回 黄色の 花を 咲かせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふいうち" },
			damage: "10+",
			cost: ["Grass"],
			effect: {
				ja: "このポケモンに[悪]エネルギーがついているなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560313,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [331],
};

export default card;
