import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "エルレイド",
	},

	illustrator: "Huang Tzu En",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "相手の 考えを 敏感に キャッチする 能力を 持つため 先に 攻撃が できるのだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダブルタイプ" },
			effect: {
				ja: "このポケモンは、場にいるかぎり[超]と[闘]の2つのタイプになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パワーサイクロン" },
			damage: 120,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555276,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Character Rare",
	dexId: [475],
};

export default card;
