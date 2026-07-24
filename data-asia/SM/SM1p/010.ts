import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "羽を 打ち合わせて 発火。 華麗な ステップを 踏みながら 激しい 炎を 浴びせかけるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じょうねつのダンス" },
			cost: ["Fire"],
			effect: {
				ja: "自分の山札にある[炎]タイプのたねポケモンを3枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "メラメラ" },
			damage: 30,
			cost: ["Fire", "Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。その後、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561538,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [741],
};

export default card;
