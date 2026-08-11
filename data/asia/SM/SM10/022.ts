import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ニョロゾ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "陸でも 暮らせるように なったのに 獲物の さかなポケモンが 多い 水の 中で 過ごしている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あわ" },
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "げんこつ" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557377,
			},
		},
	],

	evolveFrom: {
		ja: "ニョロモ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [61],
};

export default card;
