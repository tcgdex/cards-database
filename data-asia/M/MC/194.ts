import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "フローゼル",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "浮き袋を ふくらませると 人を 背中に 乗せることが できる。 浮き袋を しぼませて 潜る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "うずしお" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "アクアスラッシュ" },
			damage: 140,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863490,
			},
		},
	],

	evolveFrom: {
		ja: "ブイゼル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [419],
};

export default card;
