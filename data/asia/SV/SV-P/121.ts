import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ウパー",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "冷たい 水の中で 生活。 あたりが 涼しくなると エサを 探しに 地上にも 現れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずくみ" },
			cost: ["Water"],
			effect: {
				ja: "自分のトラッシュから「基本[W]エネルギー」を3枚まで選び、相手に見せて、山札にもどして切る。",
			},
		},
		{
			name: { ja: "ずつき" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 751819,
				tcgplayer: 587871,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [194],
};

export default card;
