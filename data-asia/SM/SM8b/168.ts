import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラロコン",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "マイナス５０度の 冷気を 吐く。 アローラの老人は ケオケオという 昔の 名前で 呼ぶことも。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みちしるべ" },
			cost: [],
			effect: {
				ja: "自分の山札にあるポケモンを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "スノーアイス" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551336,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [37],
};

export default card;
