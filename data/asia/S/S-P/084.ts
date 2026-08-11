import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "フォクスライ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "狙った 獲物は こっそり マーキング。 においを 辿って 油断 したころ 盗みに 来るぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "てしたをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "おいつめる" },
			damage: 80,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525125,
				tcgplayer: 597294,
			},
		},
	],

	evolveFrom: {
		ja: "クスネ",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [828],
};

export default card;
