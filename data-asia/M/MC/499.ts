import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "レジスチルex",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "レジチャージ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから「基本[M]エネルギー」を2枚まで選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "プロテクトスチール" },
			damage: 140,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863801,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [379],

	suffix: "EX",
};

export default card;
