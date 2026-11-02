import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "デンリュウGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 240,
	types: ["Lightning"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "パワーリチャージ" },
			damage: 30,
			cost: ["Lightning"],
			effect: {
				ja: "自分のトラッシュにある「エレキパワー」をすべて、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "インパクトボルト" },
			damage: 150,
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "このポケモンについている[雷]エネルギーを、すべてトラッシュする。",
			},
		},
		{
			name: { ja: "エレクトリカルGX" },
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札にあるポケモンを7枚まで、相手に見せてから、手札に加える。そして山札を切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558633,
			},
		},
	],

	evolveFrom: {
		ja: "モココ",
	},

	retreat: 3,
	rarity: "Hyper rare",
	dexId: [181],

	suffix: "GX",
};

export default card;
