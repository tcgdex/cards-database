import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ハギギシリ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "念力で 獲物を しびれさせ 丈夫な 歯で 噛み砕く。 シェルダーの 殻でも よゆうだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ビビッドチャージ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある基本エネルギーを3枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "サイコファング" },
			damage: 90,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561617,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [779],
};

export default card;
