import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラプラスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Water"],
			effect: {
				'ja-jp': "自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "ブリザードバーン" },
			damage: 160,
			cost: ["Water", "Water", "Water"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
		{
			name: { ja: "れいとうビームGX" },
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをマヒにする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561738,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [131],

	suffix: "GX",
};

export default card;
