import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アチャモ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "トレーナーに くっついて ちょこちょこ 歩く。口から 飛ばす 炎は 摂氏 1000度。相手を 黒コゲにする 灼熱の 玉だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つつく" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891896,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [255],
};

export default card;
