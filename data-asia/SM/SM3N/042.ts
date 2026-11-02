import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "およそ ２０年前に 当時の 科学力を 結集し 生みだされた 人工の ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "コードチェック" },
			cost: ["Colorless"],
			effect: {
				ja: "ウラになっている相手のサイドを1枚選び、そのカードのオモテを見てから、もとにもどす。",
			},
		},
		{
			name: { ja: "ビーム" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561042,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [137],
};

export default card;
