import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラスGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Water"],
			effect: {
				ja: "自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "ブリザードバーン" },
			damage: 160,
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
		{
			name: { ja: "れいとうビームGX" },
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをマヒにする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561744,
			},
		},
	],

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [131],

	suffix: "GX",
};

export default card;
