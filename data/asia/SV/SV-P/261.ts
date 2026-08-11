import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒロシマのピカチュウ",
	},

	illustrator: "REOspikee",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'ja-jp': "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リニューアルオープン！" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "のりこなす" },
			damage: "30+",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 830067,
				tcgplayer: 650763,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [25],
};

export default card;
