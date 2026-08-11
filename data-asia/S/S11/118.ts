import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "プテラVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],

	stage: "VSTAR",

	attacks: [
		{
			name: { ja: "ロストダイブ" },
			damage: 240,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を上から3枚、ロストゾーンに置く。",
			},
		},
		{
			name: { ja: "エンシェントスター" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンは、場をはなれるまで「相手の場の『ポケモンV』（『プテラVSTAR』をのぞく）の特性は、すべてなくなる。」という効果の特性を持つ。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668236,
				tcgplayer: 570048,
			},
		},
	],

	evolveFrom: {
		ja: "プテラV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [142],
};

export default card;
