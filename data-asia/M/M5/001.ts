import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "トロピウス",
	},

	illustrator: "Akino Fukuji",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "いつも 同じ 果物ばかり 食べていたら のど元に とても 美味しい 果物が 生えてきた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじつのかおり" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を上から6枚見て、その中からポケモンを好きなだけ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 60,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [357],

	thirdParty: {
		cardmarket: 888185,
	},
};

export default card;
