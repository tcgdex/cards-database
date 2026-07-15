import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "メガドリュウズex",
	},

	illustrator: "Keisuke Azuma",
	category: "Pokemon",
	hp: 340,
	types: ["Metal"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほりくずす" },
			damage: 90,
			cost: ["Metal", "Metal"],
			effect: {
				ja: "相手の山札を上から2枚トラッシュする。",
			},
		},
		{
			name: { ja: "マキシマムドリル" },
			damage: "200+",
			cost: ["Metal", "Metal", "Metal"],
			effect: {
				ja: "このワザを使うためのエネルギーより、2個多くエネルギーがついているなら、130ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888646,
			},
		},
	],

	evolveFrom: {
		ja: "モグリュー",
	},

	retreat: 4,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [530],

	suffix: "EX",
};

export default card;
