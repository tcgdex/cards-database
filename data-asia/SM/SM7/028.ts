import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ハンテール",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "深海に 生息する ポケモン。 小魚の 形をした 尻尾で 獲物を 誘き寄せ 捕まえる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かじりつく" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "デンジャラスバイト" },
			damage: "40+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがたねポケモンなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558989,
			},
		},
	],

	evolveFrom: {
		ja: "パールル",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [367],
};

export default card;
