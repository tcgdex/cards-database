import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "マイナン",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "仲間を 応援する 習性。 負けそうになると 体から 出す 火花の 数が どんどん 増える。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぽいぽいドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札が5枚になるように、山札を引く。のぞむなら、山札を引く前に、自分の手札を好きなだけトラッシュする。",
			},
		},
		{
			name: { ja: "エレキボール" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558997,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [312],
};

export default card;
