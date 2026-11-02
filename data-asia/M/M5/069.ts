import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "オトシドリ",
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "胸元の 袋で エサを 包み 巣に 持ち帰る。 大きな 音の するものを 落として 喜ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おとどけチャレンジ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、すべてオモテなら、自分の山札からポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "スピードウイング" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888337,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [962],
};

export default card;
