import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "フクスロー",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "気取り屋で 暇が あれば 翼の 手入れ。 羽毛の 汚れが 気に なりすぎて 戦えないことも。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "するどいはばね" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "リーフブレード" },
			damage: "50+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561530,
			},
		},
	],

	evolveFrom: {
		ja: "モクロー",
	},

	retreat: 1,
	rarity: "None",
	dexId: [723],
};

export default card;
