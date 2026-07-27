import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "フクスロー",
	},

	illustrator: "Shigenori Negishi",
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
			type: "holo",
			thirdParty: {
				cardmarket: 551311,
			},
		},
	],

	evolveFrom: {
		ja: "モクロー",
	},

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [723],
};

export default card;
