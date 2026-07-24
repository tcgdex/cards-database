import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "デリバード",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "本来 寒い 土地を 好むが アローラの デリバードは ある程度の 暑さでも 耐えられる ようだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ガンガンプレゼント" },
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数ぶんまで、自分の山札にある好きなカードを、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ふいをつく" },
			damage: 40,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561480,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [225],
};

export default card;
