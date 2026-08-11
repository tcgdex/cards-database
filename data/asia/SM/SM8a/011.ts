import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "デンチュラ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "敵に 襲われると 電気を 帯びた 糸を たくさん 吐き出して 電気の バリアを 作る。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きんちょうかん" },
			effect: {
				ja: "このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スパイダースレッド" },
			damage: 40,
			cost: ["Lightning"],
			effect: {
				ja: "自分のトラッシュにある好きなカードを1枚、相手に見せてから、手札に加える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558585,
			},
		},
	],

	evolveFrom: {
		ja: "バチュル",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [596],
};

export default card;
