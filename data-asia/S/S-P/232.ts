import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッチャマ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "プライドが 高く 人から 食べ物を もらう ことを 嫌う。 長い 産毛が 寒さを 防ぐ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "がんばりジャンプ" },
			damage: "30+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575115,
				tcgplayer: 597415,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [393],
};

export default card;
