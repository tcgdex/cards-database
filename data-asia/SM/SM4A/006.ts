import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "アギルダー",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "重い 殻を 脱いだために 身軽になった。 まるで 忍者のような 身のこなしで 戦う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "じこさいせい" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。このポケモンのHPをすべて回復する。",
			},
		},
		{
			name: { ja: "スピードアタック" },
			damage: 70,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560251,
			},
		},
	],

	evolveFrom: {
		ja: "チョボマキ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [617],
};

export default card;
