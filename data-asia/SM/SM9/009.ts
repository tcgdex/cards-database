import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "カイロス",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "クワガノンと 縄張りを 争う。 アローラでは なぜか ヘラクロスと 結構 仲が 良いらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はさんでしめる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "ギロチンハッグ" },
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、すべてオモテなら、相手のバトルポケモンをきぜつさせる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558287,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [127],
};

export default card;
