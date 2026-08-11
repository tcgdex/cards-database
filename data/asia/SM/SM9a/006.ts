import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "アゴジムシ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "もし 巣穴を 見つけても 手を 突っ込んでは ダメだ。 嫌がる アゴジムシに 噛みつかれるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エレキシグナル" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[雷]ポケモンを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "どつく" },
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558193,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [736],
};

export default card;
