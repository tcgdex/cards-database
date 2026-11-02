import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "トロピウス",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "いつも 同じ 果物ばかり 食べていたら のど元に とても 美味しい 果物が 生えてきた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじつのみのり" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札を1枚トラッシュする。その後、自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "かぜおこし" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863891,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [357],
};

export default card;
