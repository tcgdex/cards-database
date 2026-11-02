import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "シルヴァディ",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "覚醒し 進化した 姿。 重い マスクから 解き放たれ スピードが 大幅に アップ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アベンジハート" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "前の相手の番に、相手がとったサイドの枚数×50ダメージ追加。",
			},
		},
		{
			name: { ja: "エアスラッシュ" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557244,
			},
		},
	],

	evolveFrom: {
		ja: "タイプ：ヌル",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [773],
};

export default card;
