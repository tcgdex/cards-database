import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ポニータ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "生まれたばかりでは 立つのがやっと。 だが 走るほどに 足腰は 鍛えられて 速度が 増していく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひだね" },
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: { ja: "ふみつけ" },
			damage: "10+",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558294,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [77],
};

export default card;
