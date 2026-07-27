import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラランガGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "こんごうプレス" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ひきさく" },
			damage: 130,
			cost: ["Lightning", "Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "ゲキアッパーGX" },
			damage: 240,
			cost: ["Lightning", "Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561525,
			},
		},
	],

	evolveFrom: {
		ja: "ジャランゴ",
	},

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [784],

	suffix: "GX",
};

export default card;
