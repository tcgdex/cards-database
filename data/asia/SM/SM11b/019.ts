import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "レアコイル",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "謎の 電波を 発信 しており レアコイルが 棲んでいる 場所では 精密機器が 故障してしまう。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しょうしゅうしんごう" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分の山札にあるサポートを3枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マグネブラスト" },
			damage: 50,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555163,
			},
		},
	],

	evolveFrom: {
		ja: "コイル",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [82],
};

export default card;
