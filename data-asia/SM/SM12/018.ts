import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "オニゴーリ",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "獲物を 凍らせ 丸かじり。 だけど 好物は バニプッチなどの もともと 凍っている ポケモンだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こおりのキバ" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。さらに、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "フロストタイフーン" },
			damage: 120,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「フロストタイフーン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554796,
			},
		},
	],

	evolveFrom: {
		ja: "ユキワラシ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [362],
};

export default card;
