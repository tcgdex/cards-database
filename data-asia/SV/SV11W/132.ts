import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "コジョンド",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "腕の 体毛を ムチのように あつかう。 両腕の 攻撃は 目にも 止まらぬ 速さ。",
	},

	stage: "Stage1",

	attacks: [
		{ name: { ja: "ローキック" }, damage: 40, cost: ["Fighting"] },
		{
			name: { ja: "スマッシュアッパー" },
			damage: 80,
			cost: ["Fighting", "Fighting"],
			effect: { ja: "このワザのダメージは抵抗力を計算しない。" },
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "コジョフー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [620],
	thirdParty: {
		cardmarket: 829491,
		tcgplayer: 636685,
	},
};

export default card;
