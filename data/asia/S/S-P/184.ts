import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "エンペルトV",
		'zh-tw': "傑尼龜",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エンペラーアイ" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手の場のたねポケモン（「ルールを持つポケモン」をのぞく）の特性は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "らせんぎり",
				'zh-tw': "水槍",
			},
			damage: 130,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 564162,
				tcgplayer: 597382,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [395],
};

export default card;
