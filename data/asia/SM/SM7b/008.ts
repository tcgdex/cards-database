import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "アゲハント",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "長細い 口を 突き刺して 相手の 体液を 吸い取る。 攻撃的な 性格。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ちょくげきひこう" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "バタフライエッジ" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558833,
			},
		},
	],

	evolveFrom: {
		ja: "カラサリス",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [267],
};

export default card;
