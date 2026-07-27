import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "オニドリル",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "オニドリルの 縄張りで 食べ物を 持って 歩くのは 危険だ。 あっという 間に かっさらわれるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ドリルライナーダブル" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558158,
			},
		},
	],

	evolveFrom: {
		ja: "オニスズメ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [22],
};

export default card;
