import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラムGX",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ニトロチャージ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[炎]エネルギーを2枚まで、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "しゃくねつのはしら" },
			damage: 110,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "ヴァーミリオンGX" },
			damage: 180,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札にある[炎]エネルギーを5枚まで、自分のポケモンに好きなようにつける。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551551,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [643],

	suffix: "GX",
};

export default card;
