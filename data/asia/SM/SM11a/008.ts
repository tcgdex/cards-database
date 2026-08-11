import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードン&テールナーGX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "シャイニーフレア" },
			damage: 180,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の山札にある好きなカードを3枚まで、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ぐれんのひばしらGX" },
			cost: ["Fire"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを5枚、自分のポケモンに好きなようにつける。追加でエネルギーが1個ついているなら、相手のバトルポケモンをやけどとこんらんにする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556573,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [6, 654],

	suffix: "TAG TEAM-GX",
};

export default card;
