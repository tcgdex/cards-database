import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラランガ",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		ja: "硬い 鱗は 攻防一体。 かつては 武器や 日用品に 加工 されて 使われた。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ガードプレス" },
			damage: 60,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "いかりのアッパーカット" },
			damage: "90+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンが8個以上のっているなら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559335,
			},
		},
	],

	evolveFrom: {
		ja: "ジャランゴ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [784],
};

export default card;
